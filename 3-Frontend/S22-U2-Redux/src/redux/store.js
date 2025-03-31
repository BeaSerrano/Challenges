// 3. En `store.js`, importa las dependencias necesarias para trabajar con Redux.
// 4. Crea un estado inicial para la lista de tareas.
// 5. Define una función `reducer` que actualice el estado en función de las acciones recibidas.

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './todosSlice'

const store = configureStore({
    reducer: {
        taskStore: taskReducer,
    }
})

export default store