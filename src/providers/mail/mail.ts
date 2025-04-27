  // Configuración de Nodemailer (puedes usar otro servicio)
  
  import * as nodemailer from 'nodemailer'; // Ejemplo con Nodemailer
  export const  transporterMail = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: 'klebermera2016@gmail.com',
      pass: 'wqox hxnw gkhr mjsm',
    },
  });
