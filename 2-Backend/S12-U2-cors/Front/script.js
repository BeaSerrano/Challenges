const getCharactersByName = async () => {
    const characterName = document.getElementById('characterName').value.toLowerCase() // input
    const charactersList = document.getElementById('charactersList') // ul
    const urlApi = `http://localhost:3000/characters/${characterName}`

    try {
        const response = await fetch(urlApi)
        const data = await response.json()
        console.log('data 🤩', data);

        const allCharactersHtml = `
            ${
                data.map(character => {
                    const { name, status, species, gender, originName, image } = character;
                    return `
                    <img src="${image}" alt="${name}" />
                        <li>${name}</li>
                        <li>Status: ${status}</li>
                        <li>Species: ${species}</li>
                        <li>Gender: ${gender}</li>
                        <li>Origin: ${originName}</li>
                    `
                }).join('')
            }
        `
        charactersList.innerHTML = allCharactersHtml
    } catch (error) {
        console.log('🔴 No se ha encontrado el personaje');
    }
}