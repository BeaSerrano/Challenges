import React from 'react';
import './ListaEmpleados.css';

const ListaEmpleados = ({ empleados }) => {
    return (
        <section className="empleados">
            <h2>Lista de Empleados</h2>
            <ul>
            {empleados.map((empleado, index) => (
                <li key={index}>
                <p><strong>Nombre:</strong> {empleado.name} {empleado.lastName}</p>
                <p><strong>Edad:</strong> {empleado.age}</p>
                <p><strong>Hobbies:</strong> {empleado.hobbies.join(', ')}</p>
                </li>
            ))}
            </ul>
        </section>
    );
};

export default ListaEmpleados;
