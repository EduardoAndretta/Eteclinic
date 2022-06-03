import database from '../repository/connectionDB.js'

// Variável conn (Trabalha com a conexão do banco [Abrange todos os comandos e propriedades do connection])

async function reset(email, password){
    const conn = await database.connect();
    const sql = 'UPDATE tbl_usuarios SET senha=? WHERE email=?';
    const resetData = [password, email];
    conn.query(sql, resetData);
    conn.end();
  }

export default {reset}