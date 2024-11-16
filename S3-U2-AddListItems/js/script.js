//!-- OPCION 1 / - Con document.createTextNode()

// Traemos el boton 'agregar' con su id
const botonAgregar = document.getElementById('agregar');

// Traemos la lista 'lista' con su id
const listado = document.getElementById('lista');

// Hemos creado un eveneto 'click' dentro del botón agregar
botonAgregar.addEventListener('click', function () {
    // Se crea un 'item' con lo que ponga el usuario en el prompt
    const item = prompt('Agrega un elemento a la lista');
    // Creo un elemento <li> dentro del documento html
    const newElement = document.createElement('li');
    // Dentro de la 'lista' meto ese 'item' que es un <li>
    listado.appendChild(newElement);
    // Creamos un elemento Texto dentro de ese item (li)
    const elementText = document.createTextNode(item);
    // Mete ese Texto dentro de newElement = <li>
    newElement.appendChild(elementText);
})


//!-- OPCION 2 / Con textContent

const addBtn = document.getElementById('agregar');
const lista = document.getElementById('lista');

addBtn.addEventListener('click', function () {
    const elemento = prompt('Añadir elemento a la lista');

    if (elemento) {
        const nuevoElemento = document.createElement('li');
        console.log(nuevoElemento);
        
        nuevoElemento.textContent = elemento;
        console.log(nuevoElemento);
        
        lista.appendChild(nuevoElemento);
    } else {
        alert('No se ha añadido ningún elemento a la lista')
    }
})

//!-- OPCION 3 / Con función fuera

const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

function addElement() {
    const elemento = prompt('Añadir elemento a la lista');
    lista.insertAdjacentHTML("beforeend", `<li> ${elemento} </li>`)
}

boton.addEventListener('click', addElement)


//!-- OPCION 4 / innerHTML + función arrow

const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

boton.addEventListener('click', () => {
    const elemento = prompt('Añade un elemento a la lista');

    if (elemento) {
        const li = document.createElement('li'); // <li></li>
        li.innerHTML = elemento; // <li>elemento</li>
        lista.appendChild(li) // Meter esto: <li>elemento</li> en el HTML dentro de la ul lista
    } else {
        alert('No has añadido ningún elemento')
    }
})










//? Pruebas

/* const parrafo = document.getElementById('parrafoUno');
const contenedor = document.getElementById('contenedorUno')

console.log(parrafo);
console.log(contenedor);

console.log(parrafo.innerHTML);
console.log(contenedor.innerHTML);

console.log(parrafo.textContent);
console.log(contenedor.textContent);

console.log(parrafo.innerText);
console.log(contenedor.innerText);

console.log(document.createTextNode([1,2,3]));
console.log(document.createTextNode('adios')); */


/* let frase = `<div>
<h1> hola </h1>
<p>que tal estas</p>
<button> enviar </button>
</div>`

// traer el titulo
const titulo = document.getElementById('titulo');
// añadimos 'frase' después de h1
titulo.insertAdjacentHTML('afterend', frase) */