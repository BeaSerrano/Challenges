// -----> Estas SDKs son todas las herramientras que tiene Firebase para poder configurar este login de usuario
// y en general las herramientras necesarias para poder configurar verificaciones de usuario --> es lo que hace el login

// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// CUIDADO CON LAS IMPORTACIONES --> las de arriba dan error en la autenticación, hay que tirar de CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyADk5Hf7VrCpk_GcQCuHWKfodSzYngemko",
    authDomain: "fir-auth-f6a05.firebaseapp.com",
    projectId: "fir-auth-f6a05",
    storageBucket: "fir-auth-f6a05.firebasestorage.app",
    messagingSenderId: "537566583846",
    appId: "1:537566583846:web:7958f7b151e88d1d381ae7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// en la función de login usaremos el email y password que nos ha dado el usuario por el fomrulario de registro
// si el usuario existe y estña guardado en Firebase ---> nos devuelve el token
// usamos asincronía porque hacemos una llamada a firebase

const login = async (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página

    try {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Iniciar sesión en Firebase con email y password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // OBTENER EL TOKEN DE AUTENTICACIÓN
        const idToken = await user.getIdToken();

        console.log("Token enviado al servidor:", idToken); 

        // Enviar el token al backend en lugar de email y password
        const response = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ idToken })
        });
        
        console.log("Cuerpo de la solicitud enviado:", { idToken });
        

        const data = await response.json();
        if (data.success) {
            window.location.href = "/dashboard"; // Redirigir si el login es exitoso
        } else {
            console.error("Error en login:", data.message);
        }

    } catch (error) {
        console.log(`No se ha podido hacer el login de usuario ${error}`);
    }
};


document.getElementById('loginForm').addEventListener('submit', login);