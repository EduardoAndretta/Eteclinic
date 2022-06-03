import express, { request, response } from 'express';
import db from '../../services/profissionService.js';
import {body, validationResult} from 'express-validator';

// Middleware (Ação que atua entre o endereço e a função)

const router = express.Router();

router.get('/',(request, response) => {
  response.status(200).json({message: 'Deu tudo certo na nossa primeira requisição'});
});

router.post('/', [
  body('email').isEmail().withMessage('Email informado é inválido'),
  body('password').isLength(10)
], async (request, response) => {


  const errors = validationResult(request);

  if(!errors.isEmpty()){
    return response.status(400).json({errors: errors.array()})
  }

  // const email = request.body.email;
  // const password = request.body.password;
  // const user = request.body.user;

  const {email,password,user} = request.body;
  
  // if(password.length < 10) { response.status(400).json({message: 'Senha deve conter mais de 10 caracteres'})}

  //Função de insert (Import de userService.js)
  await db.insertUser(email, password, user);



  response.status(201).json({message: 'Cadastrei um novo usuário'});
});
 
export default router;

//nunca poderemos ter o mesmo método para o mesmo url.