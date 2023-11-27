var database = require("../database/config");

function cadastrar(nome, email, senha, tipoUser) {
    var instrucao =
        `
    insert into tb_users(name, email, type_user , password)  values
	('${nome}', '${email}', '${tipoUser}' ,'${senha}');
    `

    return database.executar(instrucao);
}

function cadastrarEmpresa(nomeEmpresa, cnpjEmpresa, userId) {
    console.log("Cheguei na model cadastrarEmpresa()");
    var instrucao =
        `
    insert into tb_companies(name, cnpj, tb_users_id) values
	('${nomeEmpresa}', '${cnpjEmpresa}', ${userId});
    `
    console.log(instrucao);
    return database.executar(instrucao);
}

function cadastrarMetrica(idEmpresa, ram, disk, cpu) {
    var instrucao =
        `
    insert into tb_alerts(tb_companies_id, percentual_cpu, percentual_disk , percentual_ram)  values
	('${idEmpresa}', '${ram}', '${disk}' ,'${cpu}');
    `
    return database.executar(instrucao);
}

function puxarMetrica(idEmpresa) {
    var instrucao = `
        select * from tb_alerts where tb_companies_id = ${idEmpresa};       
    `
    return database.executar(instrucao);
}

function listarEmpresas() {
    var instrucao = `
        select * from tb_companies;
    `
    return database.executar(instrucao);
}

function listarUsers(idEmpresa) {
    var instrucao = `
        select * from tb_users where fk_empresa = ${idEmpresa};
    `
    return database.executar(instrucao);
}

function listarAllUsers() {
    var instrucao = `
        select * from tb_users;
    `
    return database.executar(instrucao);
}

function gerarUserAtual(id) {
    var instrucao = `
        select * from tb_users where id = ${id};
    `
    return database.executar(instrucao);
}

function editarUserFkempresa(idEmpresa, userId) {
    var instrucao = `
        update tb_users set fk_empresa = ${idEmpresa} where id = ${userId};
    `
    console.log(instrucao)
    return database.executar(instrucao);
}

function editarUser(idPessoa, nome, email, password) {
    var instrucao = `
        update tb_users set name = '${nome}', email = '${email}', password = '${password}' where id = '${idPessoa}';
    `
    return database.executar(instrucao);
}

function deletarUser(idPessoa) {
    var instrucao = `
        delete from tb_users where id = ${idPessoa};
    `
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listarUsers,
    listarAllUsers,
    editarUser,
    deletarUser,
    puxarMetrica,
    gerarUserAtual,
    cadastrarEmpresa,
    cadastrarMetrica,
    listarEmpresas,
    editarUserFkempresa
}