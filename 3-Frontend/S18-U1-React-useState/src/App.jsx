import { useState } from 'react'
import './App.css'

export const App = () => {
  const [name, setName] = useState('Sofía')
  const [newName, setNewName] = useState('')

  const handleChangeName = nombre => setName(nombre)

  const changeName = (e) => { //e = event
    e.preventDefault()

    if(newName !== '') {
      setName(newName)
      setNewName('')
    }
  }

  return (
    <>
      <h1>Teacher name: {name}</h1>

      <form onSubmit={changeName}>
        <input 
          type="text"
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
          placeholder='Add a name' 
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        <li onClick={() => handleChangeName('Yol')}>Yol</li>
        <li onClick={() => handleChangeName('Aldo')}>Aldo</li>
        <li onClick={() => handleChangeName('Bea')}>Bea</li>
      </ul>
    </>
  )
}