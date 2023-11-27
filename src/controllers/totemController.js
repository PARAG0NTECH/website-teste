var totemModel = require("../models/totemModel");


function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var password = req.body.passwordServer;
    var tipoUser = req.body.tipoUserServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido");
    } else if (email == undefined) {
        res.status(400).send("Seu email está indefinido");
    } else if (tipoUser == undefined) {
        res.status(400).send("Seu tipo está indefinido");
    } else if (password == undefined) {
        res.status(400).send("Seu sexo está indefinido");
    } else {
        totemModel.cadastrar(nome, email, password, tipoUser)
            .then(
                function (result) {
                    res.json(result);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Erro ao realizar cadastro!!ERRO : " + erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }

}

function listarTotem(req, res) {

    var idEmpresa = req.query.tb_companies_id;
    
    totemModel.listarTotem(idEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum Resultado Encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro em listarTotem()");
            res.status(500).json(erro.sqlMessage);
        });
}

function listarDadosTotemAtual(req, res) {
    var maquinaAtual = req.query.idmaquina;
    
    totemModel.listarDadosTotemAtual(maquinaAtual)
        .then(function (resultado) {
                        if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum Resultado Encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro em listarDadosTotemAtual()");
            res.status(500).json({ error: erro.message });
        });
}

function editarTotem(req, res) {
    var id = req.body.idServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var password = req.body.passwordServer;

    totemModel.editarTotem(id, nome, email, password)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar o post : " + erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function metricaTotem(req, res) {
    var id = req.params.id;
    var companies_id = req.params.companies_id;

    totemModel.metricaTotem(id, companies_id)
        .then(function (resultado) {
            res.json(resultado)
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Erro ao efetuar a metricaTotem()")
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function deletarTotem(req, res) {
    var id = req.params.id;

    totemModel.deletarUser(id)
        .then(function (resultado) {
            res.json(resultado)
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Erro no deletarTotem() : " + erro.sqlMessage)
                res.status(500).json(erro.sqlMessage);
            }
        )
}
module.exports = {
    cadastrar,
    listarTotem,
    editarTotem,
    metricaTotem,
    deletarTotem,
    listarDadosTotemAtual
}