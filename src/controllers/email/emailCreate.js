const nodemailer = require('nodemailer');
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;

async function newUser(name, email) {
    //creacion y configuracion del envio de mail
  
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: GMAIL_ADMIN, // generated ethereal user
        pass: PASSWORD_ADMIN, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    
    //mensaje que se envia al mail
    let informacion = await transporter.sendMail({
      from: `"BONITA DEVOTO👾⚒️" <${GMAIL_ADMIN}>`, // sender address
      to: email, // list of receivers
      subject: "BIENVENID@ A BONITA DEVOTO", // Subject line
      html: `Hola ${name}. Gracias por elegir a BONITA DEVOTO 👏. <br></br> Te invitamos a navegar por nuestra pagina y buscar el mejor producto para tus suculentas.
           .<br></br> Recuerda que tu producto ideal esta a solo un click ✍️📉 <br></br>
           <a href=''> Click aquí para regresar a BONITA DEVOTO </a> - <br></br>
          `, // html body
    });
    return informacion;
  };

module.exports = { newUser };