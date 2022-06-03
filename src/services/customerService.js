import database from '../repository/connectionDB.js'

// Variável conn (Trabalha com a conexão do banco [Abrange todos os comandos e propriedades do connection])

async function insertCustomerAndAndress(cep, rua, numero, bairro,	cidade, estado, 
                                        cpf, nome_cliente, telefone_cliente, celular_cliente, 
                                        email_cliente, tipo_sanguineo, cliente_deletado) {

  const conn = await database.connect(); //Promisse

  const sql = 'CALL sp_createCustomerAndAndress(?,?,?,?,?,?,?,?,?,?,?,?,?);';
  const insertData = [cep, rua, numero, bairro,	cidade, estado, 
                      cpf, nome_cliente, telefone_cliente, celular_cliente, email_cliente, tipo_sanguineo, cliente_deletado]; // parâmetro da função

  await conn.query(sql, insertData); //Promisse
  conn.end(); 

}

export default {insertCustomerAndAndress}