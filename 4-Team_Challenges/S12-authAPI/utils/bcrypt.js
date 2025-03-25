// aquí está la utilidad de generar una clave aleatoria con crypto y encriptarla con bcrypt
const crypto = require('crypto') // viene de node, no hace falta instalar dependencia
const bcrypt = require('bcrypt') // dependencia externa --> hay que instalarla

const secret = crypto.randomBytes(64).toString('hex'); // crea una clave aleatoria de 64 bytes en formato hexadecimal
const hashedSecret = bcrypt.hashSync(secret, 10); // encripta la clave 'secret' con bcrypt y da diez saltos

module.exports = hashedSecret // exportamos la clave final encriptada