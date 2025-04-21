import { useEffect, useState, useRef } from "react";

const BoxColor = ({color, value}) => {
  const [text, setText] = useState('')
  const boxRef = useRef(null)

  const changeColor = (bgColor, txtColor) => {
    boxRef.current.style.backgroundColor = bgColor
    boxRef.current.style.color = txtColor
    boxRef.current.style.borderColor = color
  }

  useEffect(() => {
    color === value
    ? (setText(`Yes, I'm ${value} color`), changeColor(color, 'black'))
    : (setText(`No, I'm not ${value} color`), changeColor('transparent', color))
  }, [value])

  return (
    <div ref={boxRef} className={`box ${color}`}>{text}</div>
  )
}
export default BoxColor;






















//* ref al div del componente BoxColor

// const BoxColor = ({color, divColor}) => {
//   const divRef = useRef()

//   useEffect(() => {
//     if(color === divColor) {
//       divRef.current.style.backgroundColor = color
//       divRef.current.style.color = 'black'
//     } else {
//       divRef.current.style.backgroundColor = 'transparent'
//       divRef.current.style.color = divColor
//     }
//   }, [color])

//   return (
//     <div ref={divRef} className={`box ${divColor}`} >
//       {color === divColor ? `Yes, I'm ${color} color!` : `I'm not a ${color} color` }
//     </div> 
//   )
// }
// export default BoxColor;