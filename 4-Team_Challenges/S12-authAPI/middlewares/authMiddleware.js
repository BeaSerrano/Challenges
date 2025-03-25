// contiene un middleware de autenticación de usuarios
// generar el token
// verifican el token

const jwt = require('jsonwebtoken')
const hashedSecret = require('../utils/bcrypt')

// generamos el token --> no middleware
// jwt.sign(datos para generar token, secreto, opciones)
const generarToken = (user) => {
    const token = jwt.sign({ user : user.id }, hashedSecret, { expiresIn : '1h' })
    return token
}

// verificamos el token --> middleware
const verificarToken = (req, res, next) => {
    // const token = req.session.token --> ya no vamos a guardar así el token, para simplificar el test en postman
    // vamos a usar las Headers de la petición (req) y dentro de esas Headers en postman pondremos el 'Bearer token'
    const authHeader = req.headers['authorization'];
    // si no hay nada el la authorization de las headers --> mensaje de token no generado
    if (!authHeader) {
        return res.status(401).json({ mensaje: 'Token no generado 🔴' });
    }
    // si hay authorization en las headers
    const token = authHeader.split(' ')[1]; // se guarda con 'Bearer TOKEN' --> [0] = Bearer /// [1] = TOKEN

    // si no hay token --> mensaje de no autorizado porque no se ha podido acceder al token
    if(!token){
        return res.status(401).json({ mensaje : 'No se ha podido acceder al token 🔴' })
    }

    // si hay token generado
    // jwt.verify(token, secreto, callback con error y decodificación)
    jwt.verify(token, hashedSecret, (err, decoded) => {
        if(err){ // manejamos error si no se verifica el token
            return res.status(401).json({ mensaje : 'Token no válido 🔴' })
        }

        // si se verifica el token, se decodifica con el user
        req.user = decoded.user

        // pasamos el middleware
        next()
    })
}

module.exports = {
    generarToken,
    verificarToken
}