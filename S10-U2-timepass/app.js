const express = require('express')
const app = express()
const horaMiddleware = require('./middlewares/horaMiddleware')
const indexRouter = require('./routes/index')
const endrouteRouter = require('./routes/endroute')

// Rutas
app.use(horaMiddleware);
app.use('/', indexRouter);
app.use('/endroute', endrouteRouter)

// Listen
app.listen(3000, () => {
    console.log('El sercidor está escuchando en el puerto http://localhost:3000');
})