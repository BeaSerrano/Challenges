const express = require('express')
const router = express.Router()
const validarHora = require('../middlewares/validarHora')

router.get('/', validarHora, (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Endroute</title>
        </head>
        <body>
            <h1>Ruta final</h1>
            <h2>Bienvenido a la ruta final</h2>
        </body>
        </html>    
    `)
})

module.exports = router;