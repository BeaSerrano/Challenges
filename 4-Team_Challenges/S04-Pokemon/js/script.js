const pokemonSelect = document.getElementById('pokemon-select');
const getPokemonButton = document.getElementById('get-pokemon');
const pokemonInfo = document.getElementById('pokemon-info');
const pokemonName = document.getElementById('pokemon-name');
const pokemonImage = document.getElementById('pokemon-image');
const pokemonType = document.getElementById('pokemon-type');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonWeight = document.getElementById('pokemon-weight');

getPokemonButton.addEventListener('click', () => {
  const selectedPokemonId = pokemonSelect.value;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${selectedPokemonId}/`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      pokemonName.textContent = data.name;
      pokemonImage.src = data.sprites.front_default;
      pokemonType.textContent = data.types[0].type.name;
      pokemonHeight.textContent = data.height;
      pokemonWeight.textContent = data.weight;
      pokemonInfo.style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
    });
});