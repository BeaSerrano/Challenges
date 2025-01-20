![logotipo js](https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png)

# EJERCICIOS >>> Javascript

¡Bienvenidos al bloque de Javascript, la segunda parte de la recuperación para superar el bloque RampUp!

Este bloque contiene 3 ejercicios de Javascript que tendréis que resolver con lo aprendido en el bloque de RampUp.

## Instrucciones

1. Crea el archivo `script.js` y realiza los ejercicios en este archivo.

2. Crea el código necesario para realizar los ejercicios y usa la consola del navegador para ver los resultados.

3. Cuando hayas completado los ejercicios, haz un add, un commit y un push de tus cambios al repositorio.
   ```
   git add .
   git commit -m "mensaje"
   git push
   ```


## EJERCICIO 1

Usando un bucle `for` imprime en un `console.log()` el nombre de las personas que sean menor de edad después del texto "Personas menores de edad:" y en otro `console.log()` imprime a las personas mayores de edad después del texto "Personas mayores de edad:".

Puedes crear un nuevo array o usar este de ejemplo:

   ```
      const personas = [
         { nombre: "Marta", edad: 25 },
         { nombre: "Pedro", edad: 16 },
         { nombre: "Alejandro", edad: 18 },
         { nombre: "Antonio", edad: 31 },
         { nombre: "Laura", edad: 12 },
      ];
   ```

## EJERCICIO 2

Usando un bucle `for` reemplaza todas las comidas que no sean veganas con las verduras del array de verduras. Al final, imprime en un `console.log()` el array resultado de esa operación.

Puedes crear dos nuevos arrays o usar estos de ejemplo:

   ```
      const verduras = ["Brócoli", "Calabacín", "Guisantes", "Tomates"];

      const comidas = [
         { nombres: "Tofu", vegano: true },
         { nombres: "Pollo", vegano: false },
         { nombres: "Queso", vegano: false },
         { nombres: "Manzana", vegano: true },
         { nombres: "Patata", vegano: true },
         { nombres: "Huevos", vegano: false },
      ];
   ```

## EJERCICIO 3

Usando un bucle crea 3 arrays de peliculas filtrándolas por su duración en minutos. Las categorías son:

- Película corta >>> menos de 100 minutos de duración.
- Película media >>> entre 100 y 200 minutos de duración.
- Película larga >>> más de 200 minutos de duración. 

Al final, imprime cada array de las tres categorías en la consola.

Puedes crear un nuevo array o usar este de ejemplo:

   ```
      const peliculas = [
         { titulo: "El Rey León", minutos: 88 },
         { titulo: "Jurassic Park", minutos: 127 },
         { titulo: "Matrix", minutos: 136 },
         { titulo: "Regreso al Futuro", minutos: 116 },
         { titulo: "Frozen", minutos: 102 },
         { titulo: "Lo que en viento se llevó", minutos: 238 },
      ];
   ```
