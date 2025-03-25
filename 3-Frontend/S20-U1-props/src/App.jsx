import './App.css'
import { useState } from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';
import Template from './templates/Template';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const markAsCompleted = (id) => { 
    setTasks(
      tasks.map(task => 
        task.id === id 
        ? {...task, completed: !task.completed} // ejemplo de Toggle - interruptor para cambiar de true a false
        : task)
    )
  }

  const addTask = (taskTitle) => {
    const newTask = {
      id: tasks.length + 1, //* buscamos el índice del array más alto y sumamos 1 al valor del id del índice
      text: taskTitle,
      completed : false
    }

    setTasks([...tasks, newTask])
  }

  return (
    <>
        <Template>
          <AddTaskForm addTaskProp={addTask} />
          <ul>
            {tasks.map(task => <Task 
                key={task.id} 
                taskProp={task}
                onDelete={deleteTask}
                onToggleCompleted = {markAsCompleted}
              />
            )}
          </ul>
        </Template>
    </>

  );
};

export default App;
