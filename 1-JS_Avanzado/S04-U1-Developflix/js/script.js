import peliculas from './peliculas.js'

//! Opción 1

/* const url = 'https://image.tmdb.org/t/p/w500';

const mostrarPelis = (arrPelis, divSection) => {
    arrPelis.forEach(peli => {
        const divContenedor = document.createElement('div');
        divContenedor.classList.add('contenedor');
        
        const divImagen = document.createElement('div');
        divImagen.classList.add('divImg');

        const divTitulo = document.createElement('div');
        divTitulo.classList.add('divTitulo');

        const imgPeli = document.createElement('img');
        imgPeli.src = `${url}${peli.poster_path}`;
        imgPeli.alt = `Imagen de la pelicula ${peli.title}`;

        const tituloPeli = document.createElement('h3');

        const linkTitulo = document.createElement('a');
        linkTitulo.textContent = peli.title;
        linkTitulo.href = '#';

        tituloPeli.appendChild(linkTitulo);
        divImagen.appendChild(imgPeli);
        divTitulo.appendChild(tituloPeli);
        divContenedor.appendChild(divImagen);
        divContenedor.appendChild(divTitulo);
        divSection.appendChild(divContenedor);
    })
}

const divAction = document.getElementById('genero-28');
const peliAction = peliculas.filter(genero => genero.genre_ids.find((id) => id === 28));
mostrarPelis(peliAction, divAction);

const divThriller = document.getElementById('genero-53');
const peliThriller = peliculas.filter(genero => genero.genre_ids.find((id) => id === 53));
mostrarPelis(peliThriller, divThriller);

const divAventura = document.getElementById('genero-12');
const peliAventura = peliculas.filter(genero => genero.genre_ids.find((id) => id === 12));
mostrarPelis(peliAventura, divAventura); */

//! Opción 2

/* const url = 'https://image.tmdb.org/t/p/w500';

const mostrarPeliculas = (divSection, generoId) => {
    const contenedor = document.getElementById(divSection);
    const pelisGenero = peliculas.filter(genero => genero.genre_ids.find(id => id === generoId));

    pelisGenero.forEach(peli => {
        const divContenedor = document.createElement('div');
        divContenedor.classList.add('contenedor');
        
        const divImagen = document.createElement('div');
        divImagen.classList.add('divImg');

        const divTitulo = document.createElement('div');
        divTitulo.classList.add('divTitulo');

        const imgPeli = document.createElement('img');
        imgPeli.src = `${url}${peli.poster_path}`;
        imgPeli.alt = `Imagen de la pelicula ${peli.title}`;

        const tituloPeli = document.createElement('h3');

        const linkTitulo = document.createElement('a');
        linkTitulo.textContent = peli.title;
        linkTitulo.href = '#';

        tituloPeli.appendChild(linkTitulo);
        divImagen.appendChild(imgPeli);
        divTitulo.appendChild(tituloPeli);
        divContenedor.appendChild(divImagen);
        divContenedor.appendChild(divTitulo);
        contenedor.appendChild(divContenedor);
    })
}

mostrarPeliculas('genero-28', 28)
mostrarPeliculas('genero-53', 53)
mostrarPeliculas('genero-12', 12) */

//! Opción 3

const verPelis = (divSection, generoId) => {
    const contenedor = document.getElementById(divSection);
    const pelisGenero = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoId));
    const url = 'https://image.tmdb.org/t/p/w500';

    pelisGenero.forEach(peli => {
        const plantilla = `
            <div class="contenedor">
                <div class="divImg">
                    <img src=${url}${peli.poster_path} alt="Imagen de la pelicula ${peli.title}">
                </div>
                <div class="divTitulo">
                    <h3>
                        <a href="#">${peli.title}</a>
                    </h3>
                </div>
            </div>
        `;
        
        contenedor.innerHTML += plantilla;
    })
}

verPelis('genero-28', 28)
verPelis('genero-53', 53)
verPelis('genero-12', 12)