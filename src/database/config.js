var mysql = require("mysql2");
var sql = require('mssql');

// CONEXÃO DO SQL SERVER - AZURE (NUVEM)
// var sqlServerConfig = {
//     server: "ec2-44-194-47-186.compute-1.amazonaws.com",
//     database: "cineguardian",
//     user: "sa",
//     password: "Cine@2023!",
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     },
//     options: {
//         encrypt: true, // for azure
//     }
// }

var sqlServerConfig = {
    server: "ec2-44-194-47-186.compute-1.amazonaws.com",
    database: "cineguardian",
    user: "sa",
    password: "Cine@2023!",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for Azure
        trustServerCertificate: true // Accept self-signed certificates
    }
}


// CONEXÃO DO MYSQL WORKBENCH
var mySqlConfig = {
    host: "localhost",
    database: "cineguardian",
    user: "admin",
    password: "admin",
};

function executar(instrucao) {
    // VERIFICA A VARIÁVEL DE AMBIENTE SETADA EM app.js



        /*return new Promise(function (resolve, reject) {
            sql.connect(sqlServerConfig).then(function () {
                return sql.query(instrucao);
            }).then(function (resultados) {
                console.log(resultados);
                resolve(resultados.recordset);
            }).catch(function (erro) {
                reject(erro);
                console.log('ERRO: ', erro);
            });
            sql.on('error', function (erro) {
                return ("ERRO NO SQL SERVER (Azure): ", erro);
            });
        });*/

    

        // return new Promise(function (resolve, reject) {
        //     sql.connect(sqlServerConfig).then(function () {
        //         return sql.query(instrucao);
        //     }).then(function (resultados) {
        //         console.log(resultados);
        //         resolve(resultados.recordset);
        //     }).catch(function (erro) {
        //         reject(erro);
        //         console.log('ERRO: ', erro);
        //     });
        //     sql.on('error', function (erro) {
        //         return ("ERRO NO SQL SERVER (Azure): ", erro);
        //     });
        // });
    
   
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect();
            conexao.query(instrucao, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error', function (erro) {
                return ("ERRO NO MySQL WORKBENCH: ", erro.sqlMessage);
            });
        });
    // } else {
    //     return new Promise(function (resolve, reject) {
    //         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    //         reject("AMBIENTE NÃO CONFIGURADO EM app.js")
    //     });
    // }
}

module.exports = {
    executar
}
