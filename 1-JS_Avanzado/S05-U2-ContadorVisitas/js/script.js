//! Teoría

// localStorage.setItem() --> setea, guarda, algo en el LS
// localStorage.getItem() --> trae algo guardado en el LS
// localStorage.removeItem() --> elimina del LS la clave y valor que le digamos
// localStorage.clear() --> vacía el LS


//! Resuelto 1

/* const contador = document.getElementById('contadorVisitas')
const btnReestablecer = document.getElementById('btnReestablecer')

let visitas = localStorage.getItem('visitas')

if (visitas === null) {
    visitas = 0;
} else {
    visitas = parseInt(visitas);
}

visitas++;
contador.textContent = visitas;
localStorage.setItem('visitas', visitas);

btnReestablecer.addEventListener('click', () => {
    visitas = 0;
    localStorage.setItem('visitas', visitas);
    contador.textContent = visitas;
}); */


//! Resuelto 2

/* const counter = document.getElementById('contadorVisitas');
const button = document.getElementById('btnReestablecer');
let visitCounter = 0;

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
        visitCounter = localStorage.getItem('contador');
        visitCounter++;
        localStorage.setItem('contador', visitCounter);
        counter.textContent = localStorage.getItem('contador');
    }
});

button.addEventListener('click', () => {
    counter.textContent = 0;
    localStorage.clear()
}) */


//! Resuelto 3

/* const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

function actualizarVisitas() {
    let visitas = localStorage.getItem('contadorVisitas');
    console.log('🟢', visitas); // null -> no hay nada en contadorVisitas al inicio
    console.log('🔴', !visitas); // true -> porque viistas es null

    if (!visitas) { // condición --> visitas === null --> no hay visitas
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }

    localStorage.setItem('contadorVisitas', visitas);
    contadorVisitas.textContent = visitas;
}

function reestablecerContador() {
    localStorage.removeItem('contadorVisitas');
    contadorVisitas.textContent = 0;
}


actualizarVisitas()
btnReestablecer.addEventListener('click', reestablecerContador) */


//! Resuelto 4

/* const botonBorrar = document.getElementById('btnReestablecer');
const paginaVisita = document.getElementById('contadorVisitas');
// size de font del span de las visitas
let size = 18;

// traer visitas del local storage
const obtenerVisitasLocalStorage = () => localStorage.getItem('contadorVisitas') || 0;

// meter en contadorVisitas lo traido del local storage
let contadorVisitas = obtenerVisitasLocalStorage();

// guardar visitas en local storage --> contador se refiere a contadorVisitas
const guardarVisitasLocalStorage = (contador) => localStorage.setItem('contadorVisitas', contador);

// función para actualizar el contador en --> html y localStorage
const actualizarContador = () => {
    // actuaizo el html
    paginaVisita.textContent = contadorVisitas;
    // añadir CSS font-size mediante DOM
    paginaVisita.style.fontSize = `${size}px`;
    
    // llamo a la función de guardar visitas en el localStorage
    guardarVisitasLocalStorage(contadorVisitas);
}

// incrementar visitas
contadorVisitas++;
// aumentar el font-size con las visitas las visitas
size += contadorVisitas;

// actualizo las visitas
actualizarContador(); */

//* opción 1 botón resetar --> setItem --> pone valor 0 a contadorVisitas en el localStorage
/* botonBorrar.addEventListener('click', () => {
    localStorage.setItem('contadorVisitas', 0);
    paginaVisita.textContent = localStorage.getItem('contadorVisitas');
}) */

//* opción 2 botón resetar --> removeItem --> elimina lo que le indiquemos del localStorage
/* botonBorrar.addEventListener('click', () => {
    localStorage.removeItem('contadorVisitas');
    paginaVisita.textContent = 0;
}); */

//* opción 3 botón resetar --> clear --> vacía totalmente el localStorage
/* botonBorrar.addEventListener('click', () => {
    localStorage.clear();
    paginaVisita.textContent = 0;
}); */



//! sin funciones

/*     const visitasSpan = document.getElementById('contadorVisitas')
    const botonReestablecer = document.getElementById('btnReestablecer')

    if (isNaN(localStorage.getItem('contadorVisitas'))) {
        localStorage.setItem('contadorVisitas', 0)
    } else {
        let visitas = localStorage.getItem('contadorVisitas')
        visitas++;
        localStorage.setItem('contadorVisitas', visitas)
    }
    let contador = localStorage.getItem('contadorVisitas')
    visitasSpan.textContent = contador

    botonReestablecer.addEventListener('click', () => {
        localStorage.setItem('contadorVisitas', 0)
        contador = localStorage.getItem('contadorVisitas')
        visitasSpan.textContent = contador
    }) */

//! con funciones

    /* const visitasSpan = document.getElementById('contadorVisitas')
    const botonReestablecer = document.getElementById('btnReestablecer')

    function contarVisitas() {
        if (isNaN(localStorage.getItem('contadorVisitas'))) {
            localStorage.setItem('contadorVisitas', 0)
        } else {
            let visitas = localStorage.getItem('contadorVisitas')
            visitas++;
            localStorage.setItem('contadorVisitas', visitas)
        }
        mostrarContador()
    }

    contarVisitas()

    function mostrarContador() {
        const contador = localStorage.getItem('contadorVisitas')
        visitasSpan.textContent = contador
    }

    botonReestablecer.addEventListener('click', () => {
        localStorage.setItem('contadorVisitas', 0)
        mostrarContador()
    }) */


//! método window.onbeforeunload

/* window.onbeforeunload = () => {

    let visitas = localStorage.getItem('visitas') || 0;

    visitas = parseInt(visitas, 10) || 0;

    visitas += 1;

    localStorage.setItem('visitas', visitas);
}; */


//! Extra

// console.log(5 + 5); // 10 number
// console.log('hola' + 'mundo'); // holamundo string
// console.log(2 + 'hola'); // 2hola string
// console.log(2 + "2"); // '22' string

// console.log(parseInt('hola')); // NaN - Not a Number
// console.log(typeof(parseInt('hola'))); // number

// console.log(isNaN('22')); // false - contiene un numero aunque sea string
// console.log(isNaN('hola')); // true - no es un numero, es texto
// console.log(isNaN(345)); // false - es un numero
// console.log(isNaN(true)); // false - true = 1, es un numero


// console.log(2 + parseInt('hola')); // 2 + NaN = NaN
// console.log(typeof(2 + parseInt('hola'))); // number

// console.log(2 + parseInt('2')); // 2 + 2 = 4 
// console.log(typeof(2 + parseInt('2'))); // number

// console.log(parseInt('2.5')); // 2 - entero
// console.log(parseFloat('2.5')); // 2.5 - decimal

// console.log(true); // true
// console.log(parseInt(true)); // NaN
// console.log(true + true); // 1 + 1 = 2
// console.log(typeof (true + true)); // number

// null no vale nada
/* console.log(null); // null
console.log(typeof null); // object
console.log(null + 5); // 0 + 5 = 5
console.log(null + '1'); // 'null' + '1' = 'null1' */

// undefined no es nada
/* console.log(undefined); // undefined
console.log(typeof undefined); // undefined
console.log(undefined + 1); // NaN */


// console.log(2 + 2 + '5'); // 45 string
// console.log('2' + '2' - '2'); // 20 number ---> 22 - 2 = 20
// console.log('hola' + 'la'); // holala
// console.log('hola' - 'la'); // NaN
// console.log('hola' * 'la'); // NaN











