import express, { request, response } from 'express';
import db from '../../services/specialistService.js';
import {body, validationResult} from 'express-validator';

const router = express.Router();

router.post('/', [], async (request, response) => {

    const errors = validationResult(request);

    if(!errors.isEmpty()){
      return response.status(400).json({errors: errors.array()})
    }

    const {cep, rua, numero, bairro, cidade, estado,
           registro, nome_especialista,telefone_especialista, celular_especialista, 
           email_especialista, especialista_deletado, profissao} = request.body;

    const result = await db.insertSpecialistAndAndress(cep, rua, numero, bairro, cidade, estado,
        registro, nome_especialista,telefone_especialista, celular_especialista, 
        email_especialista, especialista_deletado, profissao);

    if(result){
      response.status(201).json({message: "Especialista cadastrado com sucesso"});
    }else{
      response.status(401).json({message: "A Profissão informada não existe"});
    }


    

});

export default router;