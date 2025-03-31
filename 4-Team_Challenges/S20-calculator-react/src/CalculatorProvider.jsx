// CalculatorProvider.js
import React, { createContext, useState, useContext } from 'react';

const CalculatorContext = createContext();

export function useCalculator() {
  return useContext(CalculatorContext);
}

export function CalculatorProvider({ children }) {
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [pressedNumbers, setPressedNumbers] = useState([]);

  const addNumber = (number) => {
    setNumbers([...numbers, number]);
    setCurrentNumber(number);
    setPressedNumbers([...pressedNumbers, number]);
  };

  const sumNumbers = () => {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum;
  };

  const resetNumbers = () => {
    setNumbers([]);
    setCurrentNumber(0);
    setPressedNumbers([]);
  };

  return (
    <CalculatorContext.Provider
      value={{ numbers, addNumber, sumNumbers, resetNumbers, currentNumber, pressedNumbers }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
