import express from 'express';
import routes from './routes.js';

const app = express();
app.use(express.json());  //Lê e envia arquivos no formato json
app.use('/', routes);     // USE -- qualquer método, qualquer ação será redirecionada para routes

app.listen(3333, () =>{console.log ('Server Running'); }) //Endereço da porta 3333