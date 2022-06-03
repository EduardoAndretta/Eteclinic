import express from 'express';
import db from '../../services/loginService.js';
import dbReset from '../../services/resetService.js';
import {generetesPassword} from '../../helpers/resetPassword.js';

const router = express.Router();

router.post('/', async (request, response) => {

  const {email, password} = request.body;

  const validatorUser = await db.loginUser(email,password);

  console.log(validatorUser);

  if(validatorUser.length > 0) {
    response.status(200).json({message:'Login Efetuado com Sucesso'});
  }else {
    response.status(401).json({message:'Login ou senha invalido'});
  }
});

// Reset password function

router.post('/reset', async (request, response  ) => {
  const {email} = request.body;

  const password = generetesPassword();

  const validatorPass = await dbReset.reset(email, password);

  if(validatorPass.length > 0) {
    response.status(200).json({message:'Senha alterada com sucesso'});
  }else {
    response.status(401).json({message:'Houve um erro na alteração da senha'})
  }
});

export default router;