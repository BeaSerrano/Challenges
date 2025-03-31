## CUSTOM HOOKS 

### Creando un Hook Personalizado con useEffect y useState

En este ejercicio, crearemos un hook personalizado utilizando los hooks `useEffect` y `useState`. Los hooks personalizados nos permiten reutilizar lógica en diferentes componentes.

Con este hook conseguiremos hacer fetch a cualquier API para luego manejar los datos.

Vamos a elegir las APIs de Pokemon y Rick and Morty, donde nos traeremos un personaje en cada caso:

```js 
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
``` 

Sigue estos pasos para crear un hook personalizado:

1. Crearemos nuestro custom hook en el archivo `hooks/useCustomHook.js`.
2. Importa los hooks necesarios de React que vamos a usar
3. Define tu función de hook. El nombre de la función debe comenzar con `use` para indicar que es un hook

Y ahora crea tu hook con `useEffect` y `useState`:

### Utilizando el Hook Personalizado

Para utilizar el hook personalizado en tus componentes, sigue estos pasos:

1. Importa el hook personalizado en tu archivo de componente, en este caso será en `App.jsx`
2. Llama al hook personalizado dentro de tu componente `App.jsx`
3. Crearemos nuestra plantilla para poder renderizar el personaje de Pokemon con su nombre e imagen y el de Rick and Morty.

```js 

//ejemplo
<h2>Personaje Pokemon</h2>
<p>aquí el nombre</p>
<img src="aqui la imagen"  />

<h2>Personaje Rick and Morty</h2>
<p>aquí el nombre</p>
<img src="aqui la imagen"  />

```

Una vez funcione puedes probar a hacerlo por componentes pasándole las `props` de nombre e imagen.