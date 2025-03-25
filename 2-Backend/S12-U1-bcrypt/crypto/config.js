const crypto = require('crypto') // genera una clave aleatoria
const bcrypt = require('bcrypt') // encripta esa clave aleatoria

const secret = crypto.randomBytes(64).toString('hex'); 
const hashedSecret = bcrypt.hashSync(secret, 10);

module.exports = hashedSecret