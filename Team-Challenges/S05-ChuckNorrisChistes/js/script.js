const fetchJokeButton = document.getElementById('fetchJoke')
const jokeList = document.getElementById('jokeList');

// cargar chistes del local storage
let jokes = JSON.parse(localStorage.getItem('jokes')) || [];

// evento en botón para obtener chistes --> fetch con llamada a la api
fetchJokeButton.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => res.json())
    .then((data) => {
        let joke = data.value; // metemos en joke cada chiste
        jokes.push(joke) // metemos en array jokes los chistes
        localStorage.setItem('jokes', JSON.stringify(jokes)) // seteamos array jokes en local storage
        renderJokes(jokes) // llamo a la función para pintar/renderizar los chistes
    })
})

// función para añadir chistes en el DOM

function renderJokes(jokesArray) {
    jokeList.innerHTML = '';

    // código para crear y eliminar CADA chiste
    for (let i = 0; i < jokesArray.length; i++) {
        let li = document.createElement('li')
        li.textContent = jokesArray[i];
        // boton para eliminar chistes
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Eliminar'
        // función borrado de cada chiste
        deleteButton.addEventListener('click', () => {
            let jokesFilter = jokesArray.filter((j) => {
                return j !== jokesArray[i];
            })
            // eliminados chiste de li
            jokeList.removeChild(li)
            // setear en local storage el nuevo array sin ese que hemos eliminado
            localStorage.setItem('jokes', JSON.stringify(jokesFilter));
        })

        // renderizar cada chiste y botones eliminar
        li.appendChild(deleteButton)
        jokeList.appendChild(li)
    }
};