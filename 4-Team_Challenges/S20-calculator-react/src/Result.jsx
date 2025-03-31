// Result.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCalculator } from './CalculatorProvider';

const Result = () => {
  const { sumNumbers, resetNumbers, pressedNumbers } = useCalculator();

  const handleReset = () => {
    resetNumbers();
  };

  return (
    <div className="result">
      <h2>Resultado</h2>
      <p>El resultado de la suma es: {sumNumbers()}</p>
      <p>Números pulsados: {pressedNumbers.join(', ')}</p>
      <button onClick={handleReset}>Reset</button>
      <br />
      <Link to="/">Volver a la calculadora</Link>
    </div>
  );
};

export default Result;
