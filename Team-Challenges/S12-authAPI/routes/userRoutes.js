// todas las rutas relacionadas con los usuarios

const express = require('express');
const { login, logout } = require('../controllers/authContoller');
const { verificarToken } = require('../middlewares/authMiddleware');

const router = express.Router(); // creo una aplicación de rutas con express --> la he llamado 'router'
// ese router define los endpoint que ejecutan funciones --> el endpoint '/' ejecuta la función 'login'
// 

router.get('/', login) 
router.post('/logout', verificarToken, logout) // solo si el user está autenticado

module.exports = router