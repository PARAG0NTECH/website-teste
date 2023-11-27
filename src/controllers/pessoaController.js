var pessoaModel = require("../models/pessoaModel");


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
        pessoaModel.cadastrar(nome, email, password, tipoUser)
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

function cadastrarEmpresa(req, res) {
    var nomeEmpresa = req.body.nomeEmpresaVar;
    var cnpjEmpresa = req.body.cnpjEmpresaVar;
    var userId = req.body.userIdVar;

    if (nomeEmpresa == undefined) {
        res.status(400).send("O nome da empresa está indefinido");

    } else if (cnpjEmpresa == undefined) {
        res.status(400).send("O CNPJ da empresa está indefinido");

    } else if (userId == undefined) {
        res.status(400).send("O id do usuário está indefinido");

    } else {
        console.log("Estou pra entrar na cadastrarEmpresa()")
        pessoaModel.cadastrarEmpresa(nomeEmpresa, cnpjEmpresa, userId)
            .then(
                function (result) {
                    res.json(result);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Erro ao realizar cadastrarEmpresa(): " + erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}

function puxarMetrica(){
    idEmpresa = req.query.tb_companies_id;

    pessoaModel.puxarMetrica(idEmpresa)
        .then(function (resultado) {

            if (resultado.length > 0) {
                res.status(200).json(resultado);

            } else {
                res.status(204).send("Nenhuma métrica encontrada!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao puxarMetrica()");
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrarMetrica(req, res) {
    var idEmpresa = req.body.idEmpresaServer;
    var ram = req.body.ramServer;
    var cpu = req.body.cpuServer;
    var disk = req.body.diskEServer;

    if (idEmpresa == undefined) {
        res.status(400).send("Seu id empresa está indefinido");
    } else if (ram == undefined) {
        res.status(400).send("Sua ram está indefinido");
    } else if (cpu == undefined) {
        res.status(400).send("Sua cpu está indefinido");
    } else if (disk == undefined) {
        res.status(400).send("Seu disk está indefinido");
    } else {
        pessoaModel.cadastrarMetrica(idEmpresa, ram, cpu, disk)
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

function gerarUserAtual(req, res) {
    var id = req.body.idServer;
    if (id == undefined) {
        res.status(400).send("Seu id está indefinido");

    } else {
        pessoaModel.gerarUserAtual(id)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);

                } else {
                    res.status(204).send("Nenhum Resultado Encontrado!")
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o login");
                res.status(500).json(erro.sqlMessage);
            });

    }
}

function listarUsers(req, res) {
    idEmpresa = req.query.tb_companies_id;

    pessoaModel.listarUsers(idEmpresa)
        .then(function (resultado) {

            if (resultado.length > 0) {
                res.status(200).json(resultado);

            } else {
                res.status(204).send("Nenhum Resultado Encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar o login");
            res.status(500).json(erro.sqlMessage);
        });
}

function listarAllUsers(req, res) {
    pessoaModel.listarAllUsers()
        .then(function (resultado) {

            if (resultado.length > 0) {
                res.status(200).json(resultado);

            } else {
                res.status(204).send("Nenhum Resultado Encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar o login");
            res.status(500).json(erro.sqlMessage);
        });
}

function listarEmpresas(req, res) {

    pessoaModel.listarEmpresas()
        .then(function (resultado) {
            if (resultado.length > 0) {

                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum Resultado Encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar o listarEmpresas()");
            res.status(500).json(erro.sqlMessage);
        });
}

function editarUserFkempresa(req, res) {
    var idEmpresa = req.body.idEmpresaVar;
    var userId = req.body.userIdVar;

    console.log("editarUserFkempresa()")
    console.log(idEmpresa)
    console.log(userId)

    pessoaModel.editarUserFkempresa(idEmpresa, userId)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar o post : " + erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function editarUser(req, res) {
    var id = req.body.idServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var password = req.body.passwordServer;

    pessoaModel.editarUser(id, nome, email, password)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar o post : " + erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function deletarUser(req, res) {
    var id = req.params.id;

    pessoaModel.deletarUser(id)
        .then(function (resultado) {
            res.json(resultado)
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Erro ao deletar : " + erro.sqlMessage)
                res.status(500).json(erro.sqlMessage);
            }
        )
}
module.exports = {
    cadastrar,
    listarUsers,
    editarUser,
    deletarUser,
    gerarUserAtual,
    listarAllUsers,
    cadastrarEmpresa,
    puxarMetrica,
    cadastrarMetrica,
    editarUserFkempresa,
    listarEmpresas
}