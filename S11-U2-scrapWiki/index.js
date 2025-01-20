const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

const url = 'https://es.wikipedia.org/wiki/Categor%C3%ADa:M%C3%BAsicos_de_rap'

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(url)
    
        if(response.status === 200){
            const html = response.data
            const $ = cheerio.load(html)

            const links = []
            const rapers = []
            const imgs = []
            
            // links
            const $links = $('#mw-pages a')
            $links.each((index, element) => {
                const link = $(element).attr('href')
                links.push(link)
            })

            // iteramos por todos los links
            for(const link of links){
                const linksResponse = await axios.get(`https://es.wikipedia.org/${link}`)
                if(linksResponse.status === 200){
                    const html = linksResponse.data
                    const $ = cheerio.load(html)

                    $('img').each((index, element) => {
                        const img = $(element).attr('src')
                        imgs.push(img)
                    })

                    const title = $('h1').text()
                    const content = $('p').text()
                    rapers.push({
                        title, 
                        imgs, 
                        content
                    })
                }
            }
            // muetsra en a ruta '/' todos los rapers del array
            res.send(imgs)
        }
    } catch (error) {
        console.log('Error al obtener los datos', error);
    }

    //* sin async await
        // axios.get(url) 
        // .then((response) => {
        //     if(response.status === 200){
        //         const scrap = response.data
        //         console.log(scrap);
        //         res.send(scrap)
        //     }
        // })
        // .catch((error) => {
        //     console.log('Error al obtener los datos', error);
        // })
})

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
})