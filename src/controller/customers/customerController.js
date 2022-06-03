import express, { request, response } from 'express';
import db from '../../services/customerService.js';
import {body, validationResult} from 'express-validator';

// Middleware (Ação que atua entre o endereço e a função) [express-validator]

const router = express.Router();

router.post('/', [
  body('id_profissao').not().isNumeric().withMessage('ID informado é inválido')
  ], async (request, response) => {
    
    const errors = validationResult(request);

    if(!errors.isEmpty()){
      return response.status(400).json({errors: errors.array()})
    }
  
    const {cep, rua, numero, bairro,	cidade, estado,
           cpf, nome_cliente, telefone_cliente, celular_cliente, email_cliente, 
           tipo_sanguineo, cliente_deletado} = request.body;
  
    //Função de insert (Import de profissionService.js)
    await db.insertCustomerAndAndress(cep, rua, numero, bairro,	cidade, estado, 
                                      cpf, nome_cliente, telefone_cliente, celular_cliente, email_cliente, 
                                      tipo_sanguineo, cliente_deletado);

  
    response.status(201).json({message: 'Cliente cadastrado com sucesso'});
});
   
export default router;
  
//nunca poderemos ter o mesmo método para o mesmo url.