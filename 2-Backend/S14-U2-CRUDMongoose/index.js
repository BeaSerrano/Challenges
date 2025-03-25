// Añadiremos nuestro servidor, conectaremos con la base de datos y uniremos el resto de la aplicación

const express = require('express')
const app = express()
const dbConnection = require('./config/config')
const router = require('./routes/taskRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

// enrutado
app.use('/', router)

const PORT = 3000

// conectamos con la bbdd
dbConnection()

app.listen(PORT, () => console.log(`Server listening 💥 on http://localhost:${PORT}`))