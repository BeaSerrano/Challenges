const express = require('express')
const path = require('path')
const admin = require('firebase-admin')
const serviceAccount = require("./config/serviceAccount");
const cookieParser = require('cookie-parser')
require('dotenv').config()

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express()
const router = require('./routes/viewRoutes')

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // todas las rutas pasarán por cookie-parser y así vetrificaremos el usuario el todas las rutas

// esta línea hace que podamos acceder a archivos estáticos (html)
// lo combinamos con 'path' para unir de manera segura los archivos que vamos a usar
// lo unimos con join --> ese join une el path del archivo estático a la carpeta public
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router);

const PORT = 3000

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))