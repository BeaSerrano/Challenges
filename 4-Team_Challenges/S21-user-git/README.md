# Buscador de Usuario de GitHub

Este ejercicio tiene como objetivo crear una aplicación que permita buscar un usuario en GitHub y mostrar su nombre, usuario, imagen, repositorios públicos y seguidores.

## Instalación

Ejecuta el siguiente comando para instalar las dependencias:

  ```bash
  npm install
  ```
Asegurate de que están todas las que vas a necesitar


## Tecnologías utilizadas

- Redux: Se utiliza Redux para gestionar el estado de la aplicación de manera centralizada.
- Redux Toolkit: Se utiliza Redux Toolkit para simplificar la configuración y el manejo de Redux.
- GitHub API: Se utiliza la API de GitHub para buscar usuarios y obtener sus datos.

## Instrucciones

Vamos a traernos los datos de un usuario de github. Puedes probar con el tuyo o generar un input para ir probando directamente desde la API. 
la URL de la API de github es la siguiente: `https://api.github.com/users/` si añadimos justo después el nombre de usuario accederemos a sus datos. Podéis comproibarlo en con esta URL https://api.github.com/users/carlosdiazgirol


Los datos serán:
- Nombre
- Nombre de usuario
- Seguidores
- Repositorios públicos
- Imagen

Para manejar el estado globar usaremos REDUX y ahí es donde guardaremos los datos del usuario que nos traigamos.

Para hacer las pruebas podéis pasar desde main.jsx el usuario por propiedades:
```js
//ejemplo
<App username="CarlosDiazGirol" />
```


La idea es trabajar el estado complejo con REDUX, pero si véis que se os complica podéis usar cualquier otro método... os recomiendo el `useContext`por ser lo mas similar que conocemos.

