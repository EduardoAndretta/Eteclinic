import database from '../repository/connectionDB.js'

// Variável conn (Trabalha com a conexão do banco [Abrange todos os comandos e propriedades do connection])

async function loginUser(email, password) {

  const conn = await database.connect(); //Promisse

  const sql = 'SELECT * FROM tbl_usuario WHERE email = ? and senha = ?;';
  const insertData = [email, password]; // parâmetro da função
  
  const  [rows] =  await conn.query(sql, insertData); //Promisse
  conn.end(); 

  return rows;
}

export default {loginUser}

