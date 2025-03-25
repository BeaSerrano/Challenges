const express = require('express')
const session = require('express-session')
const hashedSecret = require('./crypto/config')
const router = require('./routes/users')

const app = express()

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.use(session(
    {
        secret : hashedSecret, // clave secreta para generar el token con jwt
        resave : false, // false para que cada vez que entre no se recargue y guarde el token
        saveUninitialized : true, // true para que al inicio guarde la sesión
        cookie : { secure : false } 
        // las cookies guarda info de nuestra sesión. Mientras las cookies no cambien, no nos
        // van a pedir aceptarlas de nuevo --> guardo las cookies aceptaras o no en esta sesión
        // secure --> usamos http en desarrollo entonces secure : false
        // cuando hacemos un despliegue y nuestra aplicación estña en producción --> https --> secure : true
    }
))

app.use('/', router)

app.listen(3000, () => console.log(`Server listening on http://localhost:3000`))