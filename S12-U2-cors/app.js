const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())

const urlBase = 'https://rickandmortyapi.com/api/character'

// /characters --> GET --> devuelve todos los personajes disponibles en la API de Rick and Morty.
app.get('/characters', async (req, res) => {
    // try catch para manejar asincronía y errores
    // llamar a la api de ricky morty --> await --> axios
    // guardar los resultados en una variable --> data
    // devolver la variable con los datos --> json
    try {
        const response = await axios.get(urlBase)
        const data = response.data.results
        res.json(data)
    } catch (error) {
        res.status(500).json({ mensaje : '🔴 No se han podido traer los personajes de la api'})
    }
})

// /characters/:name --> GET --> devuelve un personaje por nombre --> /?name=NOMBRE
app.get('/characters/:name', async (req, res) => {
    // aquí tenemos que traer por params un nombre de un personaje para añadirlo a la ruta dinámica
    const characterName = req.params.name
    // después hacemos la llamada como en la ruta anterior
    // hay que hacer la llamada a la api con una ruta dinámica (como en sus Docs)
    try {
        const response = await axios.get(`${urlBase}/?name=${characterName}`)
        const data = response.data.results

        const dataMap = data.map(character => {
            // para el destructuring de un objeto dentro de otro, con la misma clave (name)
            // entramos dentro del objeto y renombramos la clave elegida --> origin.name va a ser igual a originName
            const { name, status, species, gender, origin : { name : originName }, image } = character
            return { name, status, species, gender, originName, image }
        })
        res.json(dataMap)
    } catch (error) {
        res.status(404).json({ mensaje : '🔴 No se ha encontrado el personaje'})
    }
})


const PORT = 3000
app.listen(PORT, () => console.log(`Server listening on http://localhost:3000`))









