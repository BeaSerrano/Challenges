// contiene las funciones que ejecutan las rutas relacionadas con los personajes traidos de la api de rick y morty
// getAllCharacters --> /characters
// getCharacterByName --> /character/:name

const { fetchAllCharacters, fetchCharacterByName } = require('../services/apiService')

// función que se ejcuta en este endpoint --> /characters
const getAllCharacters = async (req, res) => {
    try {
        const characters = await fetchAllCharacters();
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: 'Error al traer los personajes 🔴' });
    }
};

// función que se ejcuta en este endpoint --> /character/:name
const getCharacterByName = async (req, res) => {
    const { name } = req.params;
    try {
        const character = await fetchCharacterByName(name);
        if (character) {
            res.json(character);
        } else {
            res.status(404).json({ mensaje : 'Personaje no encontrado 🔴'});
        }
    } catch (error) {
        res.status(500).json({ mensaje : 'error al cargar el persobaje 🔴'});
    }
};


module.exports = { getAllCharacters, getCharacterByName };