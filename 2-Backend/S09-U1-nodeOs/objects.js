const usuario = {
    nombre : 'Alexis',
    curso : 'Fullstack',
    ciudad : 'Madrid'
}

// Object.keys() --> devuelve un array con claves
console.log(Object.keys(usuario));
//// [ 'nombre', 'curso', 'ciudad' ]


// Object.values() --> devuelve un array con valores
console.log(Object.values(usuario));
//// [ 'Alexis', 'Fullstack', 'Madrid' ]



// Object.entries() --> devuelve todo el objeto en arrays
console.log(Object.entries(usuario));
/* 
    [
        [ 'nombre', 'Alexis' ],
        [ 'curso', 'Fullstack' ],
        [ 'ciudad', 'Madrid' ]
    ]
*/


const user = [
    [ 'nombre', 'Alexis' ],
    [ 'curso', 'Fullstack' ],
    [ 'ciudad', 'Madrid' ]
]

// Object.fromEntries()

console.log(Object.fromEntries(user));
/*
    { 
        nombre: 'Alexis', 
        curso: 'Fullstack', 
        ciudad: 'Madrid' 
    }
*/

//* Set --> crea un objeto, puede crearlo a partir de un array y no repite los valores

const set1 = new Set()
console.log(set1);
// Set(0) {}

const set2 = new Set([1, 2, 3, 4, 5])
console.log(set2);
// Set(5) { 1, 2, 3, 4, 5 }

const set3 = new Set([1, 1, 2, 3, 4, 5, 5])
console.log(set3);
// Set(5) { 1, 2, 3, 4, 5 } --> ELIMINA LOS DUPLICADOS