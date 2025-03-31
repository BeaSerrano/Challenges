// Calculator.js
import React from 'react';
import { useCalculator } from './CalculatorProvider';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const { addNumber, currentNumber } = useCalculator();

  const handleButtonClick = (number) => {
    addNumber(number);
  };

  return (
    <div className="calculator">
      <h2>Calculadora</h2>
      <div className="current-number">Número actual: {currentNumber}</div>
      <div className="buttons">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button key={number} onClick={() => handleButtonClick(number)}>
            {number}
          </button>
        ))}
      </div>
      <Link to="resultado">Resultado</Link>
    </div>
  );
};

export default Calculator;
