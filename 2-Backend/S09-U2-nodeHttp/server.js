// módulo http para crear un servidor HTTP
// Importar el módulo de datos data.js en el archivo del servidor para acceder al objeto con la información de la página web.
// Configurar el servidor para responder con un documento HTML. Puedes utilizar el método res.end() para escribir dentro tu HTML (con su !DOCTYPE, H1, H2... lo que creas que es necesario)con la datos de data.js
// Ejecutar el servidor y asegurarse de que responde correctamente con un documento HTML que incorpora la información de la página web.

const web = require('./data')
const http = require('node:http')
const server = http.createServer((req, res) => { // res --> status code, headers, body
    res.writeHead(200, { 'Content-Type' : 'text/html' }) // status code, headers
    const html = `
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${web.title}</title>
            </head>
            <body>
                <header>
                    <h1 style='color: yellow;'>${web.title}</h1>
                    <h2>${web.subtitle}</h2>
                </header>
                <main>
                    <p>${web.description}</p>
                    <small>${web.author}</small>
                </main>
            </body>
        </html>
    `
    res.end(html) // body
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server listening --> http://localhost:${PORT}`);
})