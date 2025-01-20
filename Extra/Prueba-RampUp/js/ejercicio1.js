const personas = [
    { nombre: "Marta", edad: 25 },
    { nombre: "Pedro", edad: 16 },
    { nombre: "Alejandro", edad: 18 },
    { nombre: "Antonio", edad: 31 },
    { nombre: "Laura", edad: 12 },
];

let menores = [];
let mayores = [];

for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad < 18) {
        menores.push(personas[i].nombre);
    } else {
        mayores.push(personas[i].nombre);
    }
}

console.log(`Personas menores de edad: ${menores.join(", ")}`); // Personas menores de edad: Pedro, Laura
console.log(`Personas mayores de edad: ${mayores.join(", ")}`); // Personas mayores de edad: Marta, Alejandro, Antonio