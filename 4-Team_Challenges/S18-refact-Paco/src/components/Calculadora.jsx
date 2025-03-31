import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(null);

    const handleOperation = (operacion) => {
        let resultado;
        switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            resultado = num2 !== 0 ? num1 / num2 : 'Error: no se puede dividir entre 0';
            break;
        default:
            resultado = 'La operación no es válifa';
        }
        setResult(resultado);
    };

    return (
        <section>
            <h2>Calculadora</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
            />
            <div>
                <button onClick={() => handleOperation('sumar')}>Sumar</button>
                <button onClick={() => handleOperation('restar')}>Restar</button>
                <button onClick={() => handleOperation('multiplicar')}>Multiplicar</button>
                <button onClick={() => handleOperation('dividir')}>Dividir</button>
            </div>
            {result !== null && <p>Resultado: {result}</p>}
        </section>
    );
};

export default Calculadora;
