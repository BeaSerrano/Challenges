// Obtiene datos simulados de usuarios desde la API JSONPlaceholder https://jsonplaceholder.typicode.com/users.
    //// fetch
// Agrega una edad aleatoria a cada usuario.
    //// funcion para generar edades aleatorias
// Cada usuario tendrá una imagen asociada por ID (están en la carpeta assets/img) son extensión .jpeg
    //// dentro de el objeto de cada user, agregar image --> ¿?¿? ver si hay imagen en el usario
// Muestra detalles específicos de cada usuario en la lista en el DOM: name, age, username, img, phone, email, company, address
    //// dentro de el objeto de cada user coger esas claves
// address tendrá estos datos como valor: usuario.address.street, usuario.address.suite, usuario.address.city
    //// dentro de el address de cada user coger esas claves


//! Resuelto 1 --> con destructuring

//const lista = document.getElementById('listaUsuarios');

/* fetch ('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    // respuesta de esa petición del fetch
    console.log('res 😀', res);

    return res.json() // devuelve una promesa con los datos de esa url
}) // usamos otros then para manejar esos datos que trae la response
.then((data) => {
    console.log('data 👌', data);
    
    data.forEach((element) => {
        element.age = Math.floor(Math.random() * (50 - 19) + 18);

        const { id, name, username, age, email, phone } = element;
        
        const nuevoUsuario = document.createElement('li');
        nuevoUsuario.innerHTML = `
            <div class="divUsuario">
                <div class="divInformacion">
                    <p>Nombre: ${name}</p>
                    <p>Edad: ${age}</p>
                    <p>Username: ${username}</p>
                    <p>Teléfono: ${phone}</p>
                    <p>Email: ${email}</p>
                    <img src="./assets/img/${id}.jpeg" alt="${name}">
                </div>
                <p>Compañía: ${element.company.name}</p>
                <p>Dirección: ${element.address.street}, ${element.address.suite}, ${element.address.city}</p>
            </div>
        `;

        lista.appendChild(nuevoUsuario)
    })
})
.catch((err) => {
    console.log('err fetch', err);
    console.error(err)
    alert('Error con el servidor de los usuarios')
}) */


//! Resuelto 2 --> spread operator + map

/* const listaUsuarios = document.getElementById('listaUsuarios');

fetch ('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json()
})
.then((users) => {
    const usuarios = users.map((usuario) => {
        
        return {
            ...usuario,
            age : Math.floor(Math.random() * (50 - 19) + 18),
            img : `${usuario.id}`,
            company : usuario.company.name,
            address : `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`
        }
    })

    usuarios.forEach((usuario) => {
        usuariosDetalle(usuario)
        console.log(usuario);
        
    })
})
.catch((err) => {
    console.error('Error en el Fetch 💀', err);
})

function usuariosDetalle ({ id, name, username, age, email, phone, company, address }) {

    let listado = document.createElement('li');
    listado.className = 'listado';

    let divPersona = document.createElement('div');
    divPersona.className = 'divPersona';

    let listaTexto = document.createElement('ul');
    listaTexto.className = 'listaTexto';

    let listaCompania = document.createElement('ul');
    listaCompania.className = 'listaCompania';

    // Agrega Imagen
    let image = document.createElement('img');
    image.className = 'imagenUsuario';
    image.src = `./assets/img/${id}.jpeg`;
    image.alt = `User ${name}`;
    image.width = 150;

    // Detalles persona
    listaTexto.innerHTML = `
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Teléfono:</strong> ${phone}</li>
        <li><strong>Edad:</strong> ${age}</li>
        <li><strong>Correo E.:</strong> ${email}</li>
        <li><strong>Usuario:</strong> ${username}</li>
    `;

    // Compania
    listaCompania.innerHTML = `
        <li><strong>Dirección:</strong> ${address}</li>
        <li><strong>Compañía:</strong> ${company}</li>
    `;

    // Append 
    divPersona.appendChild(listaTexto);
    divPersona.appendChild(image);

    
    listado.appendChild(divPersona);
    listado.appendChild(listaCompania);

    listaUsuarios.appendChild(listado);
} */




//! Resuelto 3 --> spread operator, template, destructuring, map, modular

const listaUsuarios = document.getElementById('listaUsuarios');

const generarEdadAleatoria = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generarUsuarios = (url) => {
    fetch(url)
    .then((res) => res.json())
    .then((usuarios) => {
        const usuariosConDetalles = usuarios.map((usuario, indiceActual, array) => {
            const edad = generarEdadAleatoria(18, 65);
            const img = `./assets/img/${usuario.id}.jpeg`;
            const { street, suite, city } = usuario.address;
            const address = `${street}, ${suite}, ${city}`;
            return {
                ...usuario,
                edad,
                img,
                address,
            }
        })
        
        mostrarUsuarios(usuariosConDetalles)
    })
    .catch((error) => {
        console.log('Hubo un problema al cargar los usuarios', error)
    })
}

const mostrarUsuarios = (usuarios) => {
    usuarios.forEach(({ name, edad, username, img, phone, email, company, address }) => {
        const cadaUsuario = document.createElement('li');
        cadaUsuario.innerHTML = `
            <div class='userInfo'>
                <div class='imagen'>
                    <img src='${img}' alt='Imagen de ${name}' width='150' >
                </div>
                <div class='datos'>
                    <p><strong>Nombre: </strong>${name}</p>
                    <p><strong>Edad: </strong>${edad}</p>
                    <p><strong>Username: </strong>${username}</p>
                    <p><strong>Teléfono: </strong>${phone}</p>
                    <p><strong>Email: </strong>${email}</p>
                </div>
                <p><strong>Compañía: </strong>${company.name}</p>
                <p><strong>Dirección: </strong>${address}</p>
            </div>
        `;

        listaUsuarios.appendChild(cadaUsuario);
    });
}

generarUsuarios('https://jsonplaceholder.typicode.com/users');