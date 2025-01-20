//! --- importaciones
const express = require('express')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')

dotenv.config()

const PORT = process.env.PORT

//! --- configuramos servidor
const app = express()

//! -- configuramos Router
const router = express.Router()

//! --- rutas
router.get('/sendEmail', (req, res, next) => {
    // traemos variables de entorno
    const EMAIL = process.env.EMAIL
    const PASSWORD = process.env.PASSWORD

    // crear función para usar el servicio de gmail de nodemailer
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : EMAIL,
            pass : PASSWORD
        }
    })

    // crear el modelo del email que vamos a enviar
    const mailOptions = {
        from : EMAIL,
        to : 'email@loquesea.com',
        subject : 'Mensaje de prueba con Nodemailer',
        text : 'Todo ok 👌'
    }

    // enviar el email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // si hay un error en el envío del email, sigue la ejecución y notifica el error
            return next(error)
        } else {
            // si no hay error, devuelve un mensaje con la respuesta de la info
            res.status(200).json(`Email enviado, ${info.response}`)
        }
    })
})

//! --- usamos router con nuestra api
app.use('/api/v1', router)

//! -- escuchar al servidor
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})