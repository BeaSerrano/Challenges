const jwt = require('jsonwebtoken')
const hashedSecret = require('../crypto/config')

// generamos el token --> no middleware
// jwt.sign(datos para generar token, secreto, opciones)
const generarToken = (user) => {
    const token = jwt.sign({ user : user.id }, hashedSecret, { expiresIn : '1h' })
    return token
}

// verificamos el token --> middleware
const verificarToken = (req, res, next) => {
    const token = req.session.token

    if(!token){ // si no hay token generado
        return res.status(401).json({ mensaje : 'Token no generado' })
    }

    // si hay token generado
    // jwt.sign(token, secreto, callback con error y decodificación)
    jwt.verify(token, hashedSecret, (err, decoded) => {
        if(err){ // manejamos error si no se verifica el token
            return res.status(401).json({ mensaje : 'Token no válido' })
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