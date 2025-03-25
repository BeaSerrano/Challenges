const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Index</title>
        </head>
        <body>
            <h1>Bienvenido</h1>
            <h2>${req.horaTotal}</h2>
            <button><a href='/endroute'>Entrar</a></button>
            <h2>${req.query.mensaje ? req.query.mensaje : ''}</h2>
        </body>
        </html>    
    `)
})

module.exports = router;