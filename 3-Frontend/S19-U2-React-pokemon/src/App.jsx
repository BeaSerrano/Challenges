import { useState, useEffect } from 'react'
import './App.css';

const App = () => {
  const [inputName, setInputName] = useState('')
  const [dataPokemon, setDataPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getPokemon = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)

      if(!response.ok) {
        throw new Error("Pokemon no encontrado 🔴");
      }

      const data = await response.json()
      setDataPokemon(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error(err);
    } finally {
      setLoading(false)
    }
  } 

  useEffect(() => {
    setLoading(true)

    const delay = setTimeout(() => {
      getPokemon(inputName)
    }, 1000);
  
    return () => {
      clearTimeout(delay)
    }
  }, [inputName])

  return(
    <>
      <form>
        <input 
          type="text" 
          placeholder="Introduce un nombre de Pokemon" 
          value={inputName}
          onChange={e => setInputName(e.target.value)} 
        />
      </form>

      {error && <h2 className='error'>{error}</h2>}

      {loading && <h2 className='loading'></h2>}

      {dataPokemon && (
        <>
          <h1>{dataPokemon.name}</h1>
          <img src={dataPokemon.sprites?.other?.dream_world?.front_default} alt={dataPokemon.name} />
        </>
      )}
    </>
  )
};

export default App;











//! useEffect

// useEffect(() => {
//   //ejecuto una acción o acciones
// }) // sin array de dependencias --> se lanza cada vez que se monta el componente

// useEffect(() => {
//   //ejecuto una acción o acciones
// }, []) // array de dependencias vacío --> se lanza una vez cuando se monta el componente

// useEffect(() => {
//   //ejecuto una acción o acciones
// }, [estado o variable]) // array de dependencias listening --> se lanza cuando hay un cambio en este estado o variable
// // aquí estña escuchando ese estado o variable y solo se lanza si ve cambios