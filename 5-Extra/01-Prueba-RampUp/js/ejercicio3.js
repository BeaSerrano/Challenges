const peliculas = [
    { titulo: "El Rey León", minutos: 88 },
    { titulo: "Jurassic Park", minutos: 127 },
    { titulo: "Matrix", minutos: 136 },
    { titulo: "Regreso al Futuro", minutos: 116 },
    { titulo: "Frozen", minutos: 102 },
    { titulo: "Lo que en viento se llevó", minutos: 238 },
];

let cortas = [];
let medias = [];
let largas = [];

for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];
    if (pelicula.minutos < 100) {
        cortas.push(pelicula);
    } else if (pelicula.minutos <= 200) {
        medias.push(pelicula);
    } else {
        largas.push(pelicula);
    }
}

console.log("Películas cortas:", cortas);
console.log("Películas medias:", medias);
console.log("Películas largas:", largas);



//! Resultado --> cortas
/* Películas cortas: [ { titulo: 'El Rey León', minutos: 88 } ] */

//! Resultado --> medias
/* 
    Películas medias: [
        { titulo: 'Jurassic Park', minutos: 127 },
        { titulo: 'Matrix', minutos: 136 },
        { titulo: 'Regreso al Futuro', minutos: 116 },
        { titulo: 'Frozen', minutos: 102 }
    ] 
*/

//! Resultado --> largas
/* Películas largas: [ { titulo: 'Lo que en viento se llevó', minutos: 238 } ] */