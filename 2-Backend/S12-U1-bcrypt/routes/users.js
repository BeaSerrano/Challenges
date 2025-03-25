const express = require('express')
const users = require('../data/users')
const { generarToken, verificarToken } = require('../middlewares/authMiddleware')

const router = express.Router()

router.get('/', (req, res) => {
    // Página de inicio con formulario de inicio de sesión y enlace al panel de control

    if(req.session.token){
        const formLogout = `
            <h1>Hola</h1>
            <a href="/dashboard">Dashboard</a>
            <form action="/logout" method="post">
                <button type="submit">Cerrar Sesión</button>
            </form>
        `
        res.send(formLogout)
    } else {
        const formLogin = `
            <form action="/login" method="post">
                <label for ="username">Usuario:</label>
                <input type="text" id="username" name="username" required><br>
                <label for ="password">Contraseña:</label>
                <input type="password" id="password" name="password" required><br>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <a href="/dashboard">Dashboard</a>
        `
        res.send(formLogin)
    }
})

router.post('/login', (req, res) => {
    // Endpoint para autenticar y generar un token JWT
    const { username, password } = req.body
    const user = users.find(user => user.username === username && user.password === password)

    if(user){ // si el usuario existe
        const token = generarToken(user) // genero el token
        req.session.token = token // guardo el token en el session del usuario
        res.redirect('/dashboard')
    } else { // si el usuario NO existe
        res.status(401).json({ mensaje : 'Usuario no encontrado' })
    }
})

router.get('/dashboard', verificarToken, (req, res) => {
    // verificar el token del usuario con el middleware
    const userId = req.user
    const user = users.find(user => user.id === userId)

    if(user){ // si se ha verificado el usuario --> mostramos el dashboard
        const dashboardTemplate = `
            <h1>Bienvenido, ${user.name}</h1>
            <p>ID: ${user.id}</p>
            <p>UserName: ${user.username}</p>
            <a href="/">HOME</a>
            <form action="/logout" method="post">
                <button type="submit">Cerrar sesión</button>
            </form>
        `
        res.send(dashboardTemplate)
    } else {  // si no se ha verificado el usuario --> mensaje token no válido
        res.status(401).json({ mensaje : 'Token no válido' })
    }
})

router.post('/logout', (req, res) => {
    req.session.destroy() // destruimos el token
    res.redirect('/') // redirect a la home
})

module.exports = router