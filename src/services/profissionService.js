import database from '../repository/connectionDB.js'

// Variável conn (Trabalha com a conexão do banco [Abrange todos os comandos e propriedades do connection])

async function insertProfission(id_profissao,nome_profissao,profissao_deletada) {

  const conn = await database.connect(); //Promisse

  const sql = 'INSERT INTO tbl_profissoes(id_profissao,nome_profissao,profissao_deletada) VALUES(?,?,?);';
  const insertData = [id_profissao,nome_profissao,profissao_deletada]; // parâmetro da função

  await conn.query(sql, insertData); //Promisse
  conn.end(); 

}

export default {insertProfission}