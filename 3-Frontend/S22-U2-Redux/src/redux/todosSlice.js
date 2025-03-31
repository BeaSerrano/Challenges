import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        addTask : (state, action) => {
            const newTask = action.payload
            state.push(newTask)
        },
        removeTask: (state, action) => state.filter(task => task.id !== action.payload)
    }
})

export const { addTask, removeTask } = taskSlice.actions
export default taskSlice.reducer









// state --> estado donde estamos trabajando --> []
    // action --> donde se guarda lo que estamos haciendo --> add y remove Tasks
        // payload --> convención usada en Redux --> representa los datos que se envían por el reducer
            // accedemos al payload del action que toque para poder acceder a los datos que se han guardado