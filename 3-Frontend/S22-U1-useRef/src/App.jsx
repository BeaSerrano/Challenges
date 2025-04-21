import { useState } from 'react'
import './App.css'
import MyForm from './components/MyFormChallenge';
import BoxColor from './components/BoxColor';

const App = () => {
  const [inputColor, setInputColor] = useState('')
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  return (
    <>
      <MyForm inputColor={inputColor} setInputColor={setInputColor}/>

      <div className="container">
        {colors.map(color => <BoxColor key={color} value={inputColor} color={color} />)}
      </div>
    </>
  )
}

export default App