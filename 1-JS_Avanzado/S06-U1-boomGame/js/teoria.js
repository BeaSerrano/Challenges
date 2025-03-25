//! en tiempo real
// console.log('hola inmediato');

//! setTimeout (funcion, tiempo)
// ejecuta una tarea una vez pasado el tiempo que le digamos
// parametro 1 --> la tarea que se ejecuta es una función
// parametro 2 --> tiempo en milisegundos (3s = 3000ms)

/* setTimeout(() => {
    console.log('hola, pasados 3 segundos');
}, 3000); */

//! setInterval (funcion, tiempo)
// ejecuta una tarea cada cierto tiempo y se repite
// parametro 1 --> la tarea que se ejecuta es una función
// parametro 2 --> tiempo en milisegundos (3s = 3000ms)

/* setInterval(() => {
    console.log('hola, cada 2 segundos');
}, 2000); */

//! clearInterval --> para el interval --> si no bucle infinitivo

/* let contador = 0;

function contarTresVeces() {
    contador++;
    console.log(contador);
    if (contador === 3){
        clearInterval(intervalo)
    }
}

let intervalo = setInterval(contarTresVeces, 2000); */



//! PROMESAS

/* function numeroRandom() {
    return Math.floor(Math.random()* 3) + 1;
} */

//?creo la promesa --> con una función
/* function crearPromesa(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numeroRandom())
        }, tiempo);
    })
} */

//? manejo la promesa --> then y catch
/* crearPromesa(2000)
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.log(error);
}) */

//? manejo varias promesas a la vez

// const promesaUno = crearPromesa(2000) // a los 2s numero random
// const promesaDos = crearPromesa(3000) // a los 3s numero random
// const promesaTres = crearPromesa(5000) // a los 5s numero random

/* Promise.all([promesaUno, promesaDos, promesaTres])
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.log(error);
}) */