// hacer función para llamar a la api --> https://restcountries.com/v3/all --> fetch
    // paises en id="countries-list"
// ordenar resultado alfabéticamente --> comparar en mayúscula
// cada país --> abrir una ventana flotante
    // traer datos de país --> bandera, capital, población, lado carretera
    // botón cerrar que oculta esa ventana flotante

//! Resuelto 1

/* const getCountries = async () => { // devuelve una promesa
    try { // este try sería el then de la promesa del async
        const response = await fetch ('https://restcountries.com/v3/all'); // primer then de la promesa
        
        if (!response.ok) {
            throw new Error("Ha surgido un error", response.status);
        }

        const data = await response.json(); // segundo then de la promesa

        const ordenarPaises = await ordenarAlf(data);

        return pintarHTML(ordenarPaises);
    } catch (error) { // este catch sería el catch de la promesa del async
        console.log('Error al obtener los datos', error);
    }
}

function ordenarAlf(data) {
    return data.sort((a, b) => {
        const countryUno = a.name.common.toLowerCase();
        const countryDos = b.name.common.toLowerCase();

        if(countryUno < countryDos){
            return -1;
        }

        if (countryUno > countryDos) {
            return 1;
        }

        return 0;
    })
}

const pintarHTML = (countries) => {
    countries.forEach((elements) => {
        let countriesList = document.getElementById('countries-list');
        let paisesMundo = document.createElement('div');
        paisesMundo.innerHTML = `
            <img id='abrirVentana' alt='Bandera' src='${elements.flags[0]}' />
            <h2>${elements.name.common}</h2>
        `;

        paisesMundo.addEventListener('click', () => {
            popUp(elements);
        });

        countriesList.appendChild(paisesMundo);
    });
}

function popUp(elements) {
    let countriesInformation = document.getElementById('countries-information');
    countriesInformation.classList.add('center-pop-up');

    let cerrar = document.createElement('button');
    cerrar.classList.add('button-cerrar');

    let contenedor = document.createElement('div');
    contenedor.classList.add('pop-up');
    contenedor.innerHTML = `
        <img id='abrirVentana' alt='Bandera' src='${elements.flags[0]}' />
        <h2>${elements.name.common}</h2>
        <h3>Capital: ${elements.capital}</h3>
        <h3>Population: ${elements.population}</h3>
        <h3>Car side: ${elements.car.side}</h3>
    `;
    
    cerrar.addEventListener('click', () => {
        countriesInformation.classList.remove('center-pop-up');
        countriesInformation.innerHTML = ``;
    });
    cerrar.innerHTML = 'X';
    contenedor.appendChild(cerrar);
    countriesInformation.appendChild(contenedor);
}

getCountries() */


//! Resuelto 2

/* const countriesList = document.getElementById("countries-list")
const countrieInformation = document.getElementById("countries-information")

const getCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3/all")
        const data = await response.json()
        ordernarAlf(data) // esto no es una función asíncrona, se llama sin await
        return data
    } catch (err) {
        console.log("este es el error", err)
    }
}

const ordernarAlf = (data) => {
    data.sort((a, b) => {
        const countryUno = a.name.common.toLowerCase()
        const countryDos = b.name.common.toLowerCase()
        return countryUno.localeCompare(countryDos)
    })
}

getCountries().then(countries => {
    countries.forEach((country, index) => {
        let template = `
            <div class="card"> 
            <img src=${country.flags[0]} alt=${country.name.official} />
            <h2>${country.name.official}</h2>
            </div>
        `
        countriesList.insertAdjacentHTML("beforeend", template)

        const card = document.querySelectorAll(".card")[index]

        card.addEventListener("click", () => {
            let templateInfo = `
                <div class="info-detalle">
                <img src="${country.flags[0]}" alt="${country.name.common} flag">
                    <h2>${country.name.common}</h2>
                    <p>Capital: ${country.capital}</p>
                    <p>Población: ${country.population}</p>
                    <p>Lado de la carretera: ${country.car.side}</p>
                <button onclick="closeInfo()">cerrar</button>
                </div>
            `
            countrieInformation.innerHTML = templateInfo
            countrieInformation.classList.add("visible")
        })
    });
})

const closeInfo = () => countrieInformation.classList.remove("visible") */


//! Resuelto 3

// url de la api
const apiUrl = 'https://restcountries.com/v3/all';

const getBanderas = async () => { // función asíncrona
    try {
        const response = await fetch(apiUrl); // petición a la api
        if(!response.ok) throw new Error("Error al obtener los datos");
        
        const data = await response.json(); // respuesta de petición a la api

        const listaPaises = document.getElementById('lista');

        data.sort((a, b) => a.name.common.localeCompare(b.name.common)); // ordenar alfabéticamente nombres de paises

        data.forEach(pais => { // itero en cada pais del array
            const infoPais = document.createElement('li');
            const imagen = pais.flags[0];

            infoPais.innerHTML = `
                <img id='imgBandera' src='${imagen}' alt='Imagen bandera ${pais.name.common}' />
                <p>${pais.name.common}</p>
            `;

            infoPais.addEventListener('click', () => {
                ventanaEmergente(pais); // llamo a la función del pop up 
            })

            listaPaises.appendChild(infoPais);
        });

    } catch (error) {
        console.error('Error en el try de get Banderas', error);
    }
}

function ventanaEmergente(pais) {
    const popUp = document.getElementById('popUp');
    const paisEmergente = document.getElementById('propiedadesPais');
    const popUpBtn = document.getElementById('popUpBtn');

    const imagen = pais.flags[0];

    paisEmergente.innerHTML = `
        <img id='imgBandera' src='${imagen}' alt='Imagen bandera ${pais.name.common}' />
        <p>${pais.name.common}</p>
        <p>Capital: ${pais.capital[0]}</p>
        <p>Población: ${pais.population}</p>
        <p>Conducen por: ${pais.car.side}</p>
    `;
    
    popUp.classList.remove('oculto');
    popUpBtn.addEventListener('click', () => popUp.classList.add('oculto')) // elimino la clase que oculta el pop up
}

getBanderas()