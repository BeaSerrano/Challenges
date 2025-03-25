// crear una función de numero aleatorio entre 1 y 3
// pedirle al usuario un numero
// ejecutar la función del numero con un retraso de 5 segundos
// comparar numero de la funcion con numero de usuario
    // iguales --> "¡Has salvado el mundo!"
    // diferentes --> "La bomba ha estallado"
    // ambos --> mostrar numero usuario y aleatorio

// numero del usuario --> id="userInput" --> input
// mostrar la cuenta atras --> id="countdown" --> div
// mostrar resultado --> id="result" --> div
    // mensaje
    // numero usuario
    // numero aleatorio
// reiniciar juego --> id="restart" --> boton

//! Resuelto con set interval

const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');

function generarNumeroAleatorio() {
    return Math.floor(Math.random()* 3) + 1;
}

function iniciarCuentaAtras() {
    return new Promise((resolve) => {
        let contador = 5;
        countdown.textContent = `Cuenta atrás: ${contador} segundos`;
        const interval = setInterval(() => {
            contador--;
            countdown.textContent = `Cuenta atrás: ${contador} segundos`;
            countdown.className = 'contador-color';
            if (contador === 0) {
                clearInterval(interval);
                resolve();
            }
        }, 1000);
    });
};


function evaluarResultado() {
    const numeroUsuario = parseInt(userInput.value);
    const numeroAleatorio = generarNumeroAleatorio();
    result.innerHTML = '';

    const mensajePrincipal = document.createElement('div');
    const mensajeNumeros = document.createElement('div');

    if (numeroUsuario === numeroAleatorio) {
        mensajePrincipal.textContent = `¡Has salvado el mundo!`;
        mensajePrincipal.className = 'success-message';
        mensajeNumeros.textContent = `Tu número ${numeroUsuario} es el mismo que el número ${numeroAleatorio}`;
        mensajeNumeros.className = 'same-number';
    } else {
        mensajePrincipal.textContent = `La bomba ha estallado 🧨`;
        mensajePrincipal.className = 'wrong-message';
        mensajeNumeros.textContent = `Tu número ${numeroUsuario} no es el mismo que el número ${numeroAleatorio}`;
        mensajeNumeros.className = 'result-message';
    }

    result.appendChild(mensajePrincipal);
    result.appendChild(mensajeNumeros);
}

function iniciarJuego() {
    result.textContent = '';

    iniciarCuentaAtras()
    .then(() => { // es el resolve de la promesa
        evaluarResultado();
    })
    .catch((err) => {
        console.log('Error promesa cuenta atrás rechazada', err);
    })
}

userInput.addEventListener('change', iniciarJuego); // aquí inicia todo

restartButton.addEventListener('click', () => {
    location.reload();
});


//! Resuelto con set time out + set interval

/* function iniciarJuego() {
    // hacemos la cuenta atrás
    const interval = setInterval(() => {
        contador--;
        countdown.textContent = `Cuenta atrás: ${contador} segundos`;
        countdown.className = 'contador-color';
        if (contador === 0) {
            clearInterval(interval);
        }
    }, 1000);

    // después de la cuenta atrás hacemos el aleatorio
    const numero = new Promise((resolve) => {
        setTimeout(() => {
            const random = Math.floor(Math.random()* 3) + 1;
            resolve()
        }, 6000);
    });

    return numero;
} */


//! Resuelto 3

/* const userInput = document.getElementById('userInput');
const countdownDiv = document.getElementById('countdown');
const resultDiv = document.getElementById('result');
const restartButton = document.getElementById('restart');

let randomNumber;
let seconds = 6;

const startGame = () => {
    const countNumber = document.createElement('p');
    countdownDiv.appendChild(countNumber);

    let counter = seconds;
    const countdownSet = setInterval(() => {
        counter--;
        countNumber.innerHTML = `Cuenta atrás: <span>${counter}</span> segundos`;
        if (counter === 0) {
            userNumber();
            clearInterval(countdownSet);
        };
    }, 1000);
};

const userNumber = () => {
    const inputValue = parseInt(userInput.value);
    const answer = document.createElement('p');
    const compare = document.createElement('p');
    resultDiv.appendChild(answer);
    resultDiv.appendChild(compare);

    if (inputValue > 3 || inputValue <= 0) {
        answer.textContent = 'Debes elegir un número entre 1 y 3';
    } else if (inputValue === randomNumber) {
        answer.textContent = 'Enhorabuena, has salvado el mundo 😀';
        answer.classList.add('green');
        compare. textContent = `Tu número elegido ${inputValue} es el mismo que el número aleatorio ${randomNumber}`;
    } else {
        answer.textContent = 'La bomba ha estallado 💣';
        answer.classList.add('red');
        compare. textContent = `Tu número elegido ${inputValue} no es el mismo que el número aleatorio ${randomNumber}`;
    }
};

const restartGame = () => {
    resultDiv.textContent = '';
    countdownDiv.textContent = '';
    userInput.value = '';
    randomNumber = Math.floor(Math.random() * 3) + 1;
};

/* document.body.addEventListener('keypress', (event) => {
    console.log('input event keypress 😡', event);
    console.log('user input value 🧑‍🦰', userInput.value);
    if (event.key === 'Enter' && userInput.value.length != 0) {
        startGame();
    }
}); */

userInput.addEventListener('blur', startGame);

restartButton.addEventListener('click', restartGame);

window.addEventListener('load', restartGame);