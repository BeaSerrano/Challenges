// los servicios se usan para hacer llamadas a aplicaciones/servidores externos --> bbdd, api, ...
// este servicio tiene las funciones de llamada a donde están los usuarios (normalmente en bbdd, ahora en data)
// función para acceder y validar el usuario --> con username y password

const users = require('../data/users') // conexión a nuestra bbdd ficticia
const bcrypt = require('bcrypt') 

const validateUser = (username, password) => {
    // buscar el usuario por username
    const user = users.find(user => user.username === username)
    // encripta la password del usuario
    const passwordHashed = bcrypt.hashSync(user.password, 10)
    // si el usuario existe y las contraseñas coinciden
    if(user && bcrypt.compareSync(password, passwordHashed)){
        // devuelve el usuario
        return user
    } else {
        // si no devuelve null
        return null
    }
}

module.exports = { validateUser }