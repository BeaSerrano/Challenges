const Task = ({ taskProp, onDelete, onToggleCompleted }) => {
    const handleDelete = () => {
        onDelete(taskProp.id)
    }

    const handleToggleCompleted = () => {
        onToggleCompleted(taskProp.id)
    }

    return (
        <>
            <li style={{ listStyle: 'none' }}>
                <p 
                    onClick={handleToggleCompleted}
                    style={{ textDecoration: taskProp.completed ?  'line-through' : 'none', cursor: 'pointer' }}
                >
                    {taskProp.text}
                </p>
                <button onClick={handleDelete}>Eliminar</button>
            </li>
        </>
    )
}

export default Task