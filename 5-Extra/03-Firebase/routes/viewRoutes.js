const express = require('express')
const admin = require('firebase-admin')
const auth = admin.auth()
const checkAuth = require('../middlewares/authMiddleware')

const path = require('path')
const router = express.Router()

// enviamos un archivo estático como respuesta en la ruta /register
        // __direname --> es la base
        // "../public/views" --> accede a la carpeta donde están las vistas(views)
        // "register.html" --> la vista que pinta esta ruta en concreto

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views', 'register.html'))
})

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        await auth.createUser({
            email,
            password
        })

        res.redirect('/login')
    } catch (error) {
        console.error(`error interno de registro: ${error}`);
        res.redirect('/register')
    }
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views', 'login.html'))
})

router.post('/login', async (req, res) => {
    console.log("Datos recibidos en /login:", req.body); 

    const { idToken } = req.body;

    if (!idToken) {
        return res.status(400).json({ success: false, message: "Token no recibido" });
    }

    try {
        await auth.verifyIdToken(idToken);
        res.cookie('token', idToken, { httpOnly: true, secure: false });

        res.json({ success: true });
    } catch (error) {
        console.log(`Error al verificar el usuario: ${error}`);
        res.status(401).json({ success: false, message: "Token inválido" });
    }
});


router.get('/dashboard', checkAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views', 'dashboard.html'))
})

router.post('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/login')
})

module.exports = router;