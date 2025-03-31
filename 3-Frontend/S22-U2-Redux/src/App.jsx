import { useState } from "react";
import { addTask, removeTask } from "./redux/todosSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [inputTask, setInputTask] = useState('')
  const taskDispatch = useDispatch()
  const tasks = useSelector(state => state.taskStore)

  const handleAddTask = () => {
    taskDispatch(addTask({
      id: Math.random(),
      text: inputTask
    }))
    setInputTask('')
  }

  const handleRemoveTask = (id) => {
    taskDispatch(removeTask(id))
  }
  
  return (
    <>
      <h1>Lista de tareas</h1>
      <input 
        type="text"
        value={inputTask}
        onChange={e => setInputTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Añadir tarea</button>
      <ul>
        {tasks && tasks.map(task => {
          {console.log(task)}
          return (<li key={task.id}>
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)}>Eliminar tarea</button>
          </li>)
        })}
      </ul>
    </>
  );
};

export default App;