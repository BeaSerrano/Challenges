// contiene las funciones que se ejecutan en las rutas relacionadas con el usuario
// login --> /login
// logout --> /logout

const { validateUser } = require('../services/userService'); // ver si el usuario existe y coinciden las contraseñas
const { generarToken } = require('../middlewares/authMiddleware'); // si esta validado, genera el token para verificarlo
const users = require('../data/users'); // accedemos a todos los usuarios de nuestra bbdd ficticia

// Si tuvieramos una vista, esta función --> Muestra la página de inicio / realiza el login
const login = (req, res) => {
    // traer username y password --> req.body
    const { username, password } = req.body;
    // buscar al usuario
    const user = users.find((u) => u.username === username && u.password === password);
    // si no se encuentra al usuario --> error
    if (!user) {
        return res.status(401).json({ message: 'Usuario o contraseña no válidos ⛔' });
    }
    // si el usuario existe
    if (username && password){
        // validamos al usuario
        const userValidado = validateUser(username, password) // puede devolver 'user' o 'null' --> ver userService.js
        // si validamos al usuario
        if (userValidado) {
            // generamos el token
            const token = generarToken(userValidado);
            // guardamos el token en la session
            req.session.token = token;
            // devolvemos el token
            return res.json({ message: 'Hola, estás logado 😁', token });
        }
    }

    res.status(401).json({ message: 'Usuario o contraseña no válidos ⛔' });
}

// desloguea al usuario
const logout = (req, res) => {
    req.session = null; // también podemos usar destroy()
    res.json({ message: 'Hasta pronto, has cerrado sesión 🥺' });
}

module.exports = {
    login,
    logout
}