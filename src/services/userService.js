import database from '../repository/connectionDB.js';

// Variável conn (Trabalha com a conexão do banco [Abrange todos os comandos e propriedades do connection])

async function insertUser(email, password, user) {

  const conn = await database.connect(); //Promisse

  const sql = 'INSERT INTO tbl_usuario(email, senha, usuario) VALUES(?,?,?);';
  const insertData = [email, password, user]; // parâmetro da função

  await conn.query(sql, insertData); //Promisse
  conn.end(); 

}

export default {insertUser}

