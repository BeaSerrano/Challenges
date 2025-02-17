const express = require('express');
const session = require('express-session');
const cors = require('cors'); // solo se usa si hay front
const hashedSecret = require('./utils/bcrypt')

const userRoutes = require('./routes/userRoutes');
const apiRoutes = require('./routes/apiRoutes')

const app = express();
const PORT = 3000;

app.use(cors()); // solo se usa si hay front
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configurar session --> en este caso para guardar el hashedSecret
app.use(
    session({
        secret: hashedSecret,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }
    })
);

// rutas
app.use('/', userRoutes)
app.use('/api', apiRoutes)

app.listen(PORT, () => console.log(`Server listening 🤖 on http://localhost:${PORT}`));