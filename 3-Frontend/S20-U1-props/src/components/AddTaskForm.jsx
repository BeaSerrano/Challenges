import { useState } from "react"

const AddTaskForm = ({ addTaskProp }) => {
    const [inputTask, setInputTask] = useState('')

    const handleAddTask = (e) => {
        e.preventDefault() // no dejamos que el submit recargue la página
        addTaskProp(inputTask)
        setInputTask('')
    }

    return (
        <>
            <form onSubmit={handleAddTask}>
                <input 
                    type="text"
                    placeholder="Introduce una tarea"
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                />
                <button type='submit'>Agregar tarea</button>
            </form>
        </>
    )
}

export default AddTaskForm