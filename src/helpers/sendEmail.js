import nodemailer from 'nodemailer';
import {config} from './smtp.js';

const transporter = nodemailer.createTransport(config);

function sendEmail(email, newPassword) {
  transporter.sendEmail({
    subject: `Redefinição de Senha - Eteclinic`,
    from: `Suporte Eteclinic <eduardoandreta@gmail.com>`,
    to: `${email}`,
    html: `
    <html>
      <body>
        <p>Olá! Tudo bem? 
        <br>Você solicitou a recuperação de senha para o site: <em>Eteclinic.com</em>.</br>
        Sua nova senha de acesso é: <h3> ${newPassword} </h3> </p>
        <a href="#"> Clique aqui para acessar o site </a>
      </body>
    </html>
    `
  });
}

export {sendEmail};