import express, { request, response } from 'express';
import db from '../../services/userService.js';
import {body, validationResult} from 'express-validator';

// Middleware (Ação que atua entre o endereço e a função)

const router = express.Router();

router.post('/', [
  body('id_profissao').not().isNumeric().withMessage('ID informado é inválido')
  ], async (request, response) => {
    
    const errors = validationResult(request);

    if(!errors.isEmpty()){
      return response.status(400).json({errors: errors.array()})
    }
  
    const {id_profissao,nome_profissao,profissao_deletada} = request.body;
  
    //Função de insert (Import de profissionService.js)
    await db.insertProfission(id_profissao,nome_profissao,profissao_deletada);
  
    response.status(201).json({message: 'Profissão cadastrada com sucesso'});
  });
   
export default router;
  
//nunca poderemos ter o mesmo método para o mesmo url.

