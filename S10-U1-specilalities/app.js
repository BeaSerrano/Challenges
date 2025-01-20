// express
const express = require('express')
const app = express()
const PORT = 3000

// datos
const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

// filtrado especialidades
const filtrado = (especialidad) => {
    return usersData.filter(usuario => usuario.specialty === especialidad)
}

// función template
const template = (specialty) => {
    const usuarios = filtrado(specialty)

    const template = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${!specialty ? 'Inicio' : `${usuarios[0].specialty.toUpperCase()}`}</title>
        </head>
        <body>
        ${!specialty ? `
                <h1>Pincha en una especialidad 😀</h1>
                <a href="/">Inicio</a>
                <a href="/marketing">Marketing</a>
                <a href="/ventas">Ventas</a>
                <a href="/QAs">QAs</a>
                <a href="/developers">Developers</a>
            ` : `
                <h1>Usuarios ${usuarios[0].specialty.toUpperCase()}: ${usuarios.length}</h1>
                <ul>${usuarios.map(usuario => `<li>Número id: ${usuario.id}, Nombre: ${usuario.name}, Edad: ${usuario.age}</li>`).join('')}</ul>
                <a href="/">Inicio</a>
                <a href="/marketing">Marketing</a>
                <a href="/ventas">Ventas</a>
                <a href="/QAs">QAs</a>
                <a href="/developers">Developers</a>
            `
        }
            
        </body>
        </html>    
    `

    return template
}

// rutas
app.get('/', (req, res) => {
    res.send(template()) // sin especialidad
})

app.get('/marketing', (req, res) => {
    res.send(template('marketing'))
})

app.get('/developers', (req, res) => {
    res.send(template('developers'))
})

app.get('/ventas', (req, res) => {
    res.send(template('ventas'))
})

app.get('/QAs', (req, res) => {
    res.send(template('QAs'))
})



// ruta no encontrada
app.use((req, res) => {
    res.status(404).send(`
        <h1>Página no encontrada 🫠</h1>
        <a href="/">Inicio</a>
        `)
    })
    
    
// escuchar servidor
app.listen(PORT, () => {
    console.log(`Listening server on PORT http://localhost:${PORT}`);
})
    








    //! ------------ OSCAR
    
    // Ruta para especialidades dinámicas
    
    // app.get('/:specialty', (req, res) => {
    //     const specialty = req.params.specialty;
    //     const users = filterUsersBySpecialty(specialty);
    //     if (users.length > 0) {
    //     res.send(`
    //         <html>
    //         <head><title>${specialty.toUpperCase()}</title></head>
    //         <body>
    //             <h1>Especialidad: ${specialty.toUpperCase()}</h1>
    //             <p>Número de personas: ${users.length}</p>
    //             <ul>
    //             ${users.map((user) => `<li>${user.name}, ${user.age} años</li>`).join('')}
    //             </ul>
    //             <nav>
    //                 <a href="/">Volver al inicio</a>
    //             </nav>
    //         </body>
    //         </html>
    //     `);
    //     } else {
    //     res.status(404).send(`
    //         <html>
    //         <head><title>404 - No Encontrado</title></head>
    //         <body>
    //             <h1>Error 404</h1>
    //             <p>La especialidad "${specialty}" no tiene datos registrados.</p>
    //             <nav>
    //                 <a href="/">Volver al inicio</a>
    //             </nav>
    //         </body>
    //         </html>
    //     `);
    //     }
    // });