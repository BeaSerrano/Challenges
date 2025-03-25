# Ejercicio de uso de useContext en React

Este ejercicio tiene como objetivo ayudarte a familiarizarte con el uso de `useContext` en React para gestionar el estado global de una aplicación. 

Tendremos que crear un botón que al pulsarlo cambie el estado y a su vez las css.

## Pasos a seguir

### 1. Configuración del proyecto

npm install para instalar todas las dependencias.

### 2. Crear la estructura del proyecto

```
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   ├── MyJob.jsx
│   ├── routes/
│   │   ├── RoutesApp.jsx
│   ├── themes/
│   │   ├── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   ├── index.css
│   └── ...
├── index.html
```

### 3. Qué tendrá cada archivo:
- `main.jsx, app.css, index.css e index.html` se mantendrán sin cambios
- `components/Button.jsx`: Será el botón que hará que cambie el estado de `light` a `dark`
- `pages`: dentro estará home, profile y myJob. En cada una renderizarás lo que quieras pero que se diferencien entre ellas. Por ejemplo podemos poner `<h1>Esta es la página home</h1>`, `<h1>Esta es la página profile</h1>` , `<h1>Esta es la página MyJob</h1>`.

En todas las páginas debe aparecer el botón para cambiar. Decide si va en cada una o hay otra manera de ponerla para todas.
- `routes/RoutesApp`: Irán nuestras rutas. Puedes hacerlas con:

```js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
```

- `themes/ThemeContext.jsx`: Aquí estará nuestro contexto y donde haremos los cambios de estado. Debemos comenzar con un estado de `light` que al pulsar cambiará a `dark`. Al hacerlo hay unas clases creadas en `index.css` donde puedes ver lo que hace.
- `App.jsx`: Es el inicio de nuestra aplicación y donde habrá que usar el `ThemeProvider` y las `rutas`

*** Pistas: ***
Para cambiar la clase puedes hacer algo similar a esto:
```js 
<section className={`App ${theme}`}>
```
Esto puede ir sobre todas tus rutas `<Routes>` envolviéndolas. CUando se clicke de inicio en ese `theme`será nuestro valor inicial del `useState` y al clickar el botón cambiará.

- Si necesitas usar más css, más divs, sections o componentes... siéntete libre de hacerlo, siempre que la aplicación funcione y quede correcta.