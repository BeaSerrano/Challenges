// los servicios se usan para hacer llamadas a aplicaciones/servidores externos --> bbdd, api, ...
// este servicio tiene las funciones de llamada a la api de rick y morty
// función que llama a url con todos los personajes --> https://rickandmortyapi.com/api/character
// función que llama a la url que tiene el filtro de personajes por nombre --> https://rickandmortyapi.com/api/character/?name=NOMBRE

const axios = require('axios');

const apiUrl = 'https://rickandmortyapi.com/api/character';

// función que llama a url con todos los personajes
const fetchAllCharacters = async () => {
    const response = await axios.get(apiUrl);
    return response.data.results;
};

// función que llama a la url que tiene el filtro de personajes por nombre
const fetchCharacterByName = async (name) => {
    const response = await axios.get(`${apiUrl}?name=${name}`);
    return response.data.results[0];
};

module.exports ={ fetchAllCharacters, fetchCharacterByName}
