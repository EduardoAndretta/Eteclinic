import database from '../repository/connectionDB.js';

async function insertSpecialistAndAndress(cep, rua, numero, bairro, cidade, estado,
                                          registro, nome_especialista,telefone_especialista, celular_especialista, 
                                          email_especialista, especialista_deletado, profissao){

    const conn = await database.connect(); //Promisse

    const sqlVerification = "SELECT id_profissao FROM tbl_profissoes WHERE nome_profissao=?";
    const insertDataVerification = [profissao];

    const [rows] = await conn.query(sqlVerification, insertDataVerification);

    if(rows.length < 1){
       return false;
    }
        

    const sql = 'CALL sp_createSpecialistAndAndress(?,?,?,?,?,?,?,?,?,?,?,?,?);';
    const insertData = [cep, rua, numero, bairro, cidade, estado,
                        registro, nome_especialista,telefone_especialista, celular_especialista, 
                        email_especialista, especialista_deletado, profissao];

    await conn.query(sql, insertData); //Promisse
    conn.end(); 

    return true;
}

export default {insertSpecialistAndAndress}