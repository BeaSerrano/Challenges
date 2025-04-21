import { useEffect, useRef } from 'react'

const MyForm = ({ inputColor, setInputColor }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
        <input 
          type="text" 
          placeholder='Choose a color'
          ref={inputRef}
          value={inputColor}
          onChange={() => setInputColor(inputRef.current.value)}
        />
    </>
  );
}

export default MyForm;

























//* referencia al div
// const MyForm = () => {
//   const [value, setValue] = useState('')
//   const [color, setColor] = useState('')
//   const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

//   const findColor = (inputValue) => {
//     //const colorFound = colors.find(color => color === inputValue)
//     setColor(inputValue)
//   }

//   useEffect(() => {
//     findColor(value)
//   }, [value])

//   return (
//     <>
//       <input 
//         type="text" 
//         value={value}
//         onChange={e => setValue(e.target.value)}
//         placeholder="Choose a color"
//       />

//       <div className='container'>
//         {colors.map(divColor => <BoxColor key={divColor} value={value} color={color} divColor={divColor}/>)}
//       </div>
//     </>
//   );
// }