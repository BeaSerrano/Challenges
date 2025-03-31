# Sumando números con REACT

Vamos a crear una especie de calculadora que nos ayudará a sumar números dando un resultado final en otra página. Esto lo haremos gracias a `useContext` y `useState`. También gestionaremos nuestras rutas con `create-router-dom`. 

## Pasos a seguir

### Paso 1: Configuración del proyecto
- Comenzaremos instalando las dependencias con `npm i`. Revisaremos si tenemos `react-router-dom` instalado. 

### Paso 2: Crear los componentes y el contexto
- Crear un componente `CalculatorProvider` que utilizará `createContext` para proporcionar un contexto a la aplicación. Aqui definiremos el estado en el contexto para mantener una lista de números seleccionados y el número actualmente seleccionado.
- Crear un componente `Calculator` que mostrará la calculadora y permitirá a los usuarios seleccionar números.
Cada vez que se pulse un botón aparecerá el número en pantalla. Luego habrá un enlace a la ruta `resultado` donde aparecerá el resultado de la suma.
- Crearemos el componente `Result`en el que mostraremos el resultado de la suma de todos los números pulsados y todos los números que se han pulsado. También tendremos un botón de reset para dejar a 0 los valores. 

### Paso 3: Implementar la lógica de la calculadora
- En el contexto `CalculatorProvider`, agregar funciones para agregar números a la lista, sumar los números seleccionados y restablecer la calculadora.
- Implementar la función de agregar números `addNumbers` para agregar números a la lista y actualizar el número actualmente seleccionado.
- En la página de la calculadora aparecerán los números del 0 al 9 para poder pulsarlos. Al pulsarlos se irán sumando. Tendremos un enlace a `resultado` para ver el resultado. 
- Mostrar el resultado de la suma de los números seleccionados en la ruta de `resultado`. Además del resultado, tendrán que aparecer los números que hemos pulsado, un botón de `reset` para dejar todo a 0 y un enlace de vuelta a la calculadora.

### BONUS

Añadir estilos para resaltar el número actual seleccionado en la calculadora y para mostrar la lista de números seleccionados de manera clara en la página de resultado.




 