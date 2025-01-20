const verduras = ["Brócoli", "Calabacín", "Guisantes", "Tomates"];

const comidas = [
    { nombres: "Tofu", vegano: true },
    { nombres: "Pollo", vegano: false },
    { nombres: "Queso", vegano: false },
    { nombres: "Manzana", vegano: true },
    { nombres: "Patata", vegano: true },
    { nombres: "Huevos", vegano: false },
];

let verdura = 0;

for (let i = 0; i < comidas.length; i++) {
    if (!comidas[i].vegano) {
        comidas[i].nombres = verduras[verdura];
        comidas[i].vegano = true;

        verdura = (verdura + 1) % verduras.length;
    }
}

console.log(comidas);

//! Resultado:
/* 
    [
        { nombres: "Tofu", vegano: true },
        { nombres: "Brócoli", vegano: true },
        { nombres: "Calabacín", vegano: true },
        { nombres: "Manzana", vegano: true },
        { nombres: "Patata", vegano: true },
        { nombres: "Guisantes", vegano: true }
    ]
 */