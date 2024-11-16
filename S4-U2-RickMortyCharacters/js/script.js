//! Opción 1 --> con DOMContentLoaded

/* document.addEventListener('DOMContentLoaded', () => {
    const principal = document.getElementById('character-list');

    fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((res) => {
        if(!res.ok){ // dentro de la res, ok = false
            console.log('Algo ha salido mal');
        }
        return res.json()
    })
    .then((data) => {
        const personajesHTML = data.results.map((character) => {
            return `
                <li class='maquetacion'>
                    <img src='${character.image}' atl='${character.name}'>
                    <h3>${character.name}</h3>
                    <p>Especie: ${character.species}</p>
                </li>
            `;
        }).join('');
        principal.innerHTML = personajesHTML;
    })
    .catch((err) => {
        console.error(err);
        principal.innerText = 'Algo ha salido mal';
    })
}) */

//! Opción 2 ---> sin DOMContentLoaded, con función

let currentPage = 1;
const apiUrl = 'https://rickandmortyapi.com/api/character/?page=';
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');

const todosPersonajes = (paginaActual) => {
    const principal = document.getElementById('character-list'); // ul

    fetch(`${apiUrl}${paginaActual}`)
    .then((response) => {
        if(!response.ok){
            throw new Error('Algo ha salido mal');
        }
        console.log(response);
        
        return response.json()
    })
    .then((data) => {
        console.log('data 😃', data);
        console.log('results 🤖', data.results);
        console.log('info 👿', data.info);
        
        // deshabilitar botón NEXT cuando llegue al número total de páginas
        if ( paginaActual >= data.info.pages ) {
            nextPageButton.disabled = true;
            nextPageButton.classList.add('disabled')
        } else {
            nextPageButton.disabled = false;
            nextPageButton.classList.remove('disabled')
        }

        // deshabilitar botón PREV cuando prev sea null
        if ( data.info.prev === null) {
            prevPageButton.disabled = true;
            prevPageButton.classList.add('disabled')
        } else {
            prevPageButton.disabled = false;
            prevPageButton.classList.remove('disabled')
        }
        
        // mapeo de los personajes + crear template
        const personajesHTML = data.results.map((character) => {
            return `
                <li class='character'>
                    <img src='${character.image}' atl='${character.name}'>
                    <h3>${character.name}</h3>
                    <p>Especie: ${character.species}</p>
                </li>
            `;
        })
        // colocamos el template en la ul
        principal.innerHTML = personajesHTML;
    })
    .catch((err) => {
        console.error(err);
        principal.innerText = 'Algo ha salido mal';
    })
}
// llamamos a la función con la página currentPage = 1
todosPersonajes(currentPage)

// evento botón PREV - 1
prevPageButton.addEventListener('click', () => {
    if ( currentPage > 1 ){
        currentPage--;
        todosPersonajes(currentPage)
    }
})
// evento botón NEXT + 1
nextPageButton.addEventListener('click', () => {
    currentPage++;
    todosPersonajes(currentPage)
})


//! Opción 3 ---> sin plantilla, con atributos