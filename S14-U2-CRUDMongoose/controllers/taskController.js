const TaskModel = require('../models/TaskModel')

const taskController = {
    async createTask (req, res) {
        try {
            const task = await TaskModel.create({ ...req.body, completed: false }) // por el req.body se le pide al usuario el title
            res.status(201).json({ mensaje: 'Tarea creada 🟢', task })
        } catch (error) {
            console.error('Error al crear la tarea 🔴', error);
        }
    },
    async getAllTasks (req, res) {
        try {
            const tasks = await TaskModel.find()
            res.status(200).json({ mensaje: 'Todas las tareas 🟢', tasks })
        } catch (error) {
            console.error('Error al traer las tareas 🔴', error);
        }
    },
    async getTaskById (req, res) {
        try {
            const taskId = await TaskModel.findById(req.params._id)
            res.status(200).json({ mensaje: 'Tarea encontrada 🟢', taskId })
        } catch (error) {
            console.error('Error al encontrar la tarea 🔴', error);
        }
    },
    async markAsCompleted (req, res) {
        try {
            const taskId = req.params._id
            const task = await TaskModel.findByIdAndUpdate(
                taskId,
                { completed : true },
                { new : true }
            )
    
            if(!task) res.status(404).json({ mensaje: 'Tarea no encontrada 🔴'})
    
            res.status(200).json({ mensaje: 'Tarea marcada como completada 🟢', task })
        } catch (error) {
            console.error('Error al marcar la tarea como completada 🔴', error);
        }
    },
    async updateTitle (req, res) {
        try {
            const taskId = req.params._id
            const { title } = req.body
    
            const taskUpdated = await TaskModel.findByIdAndUpdate(
                taskId,
                { title }, // la clave a actualizar sería title y la clave de donde saco el nuevo titulo del req.body también es title. Sería --> { title : title } --> si se llaman igual, puede ponerse solo una vez. Interpreta que clave y valor se llaman igual (el contenido de esa clave ya es otra diferente, nos la da el usuario por el req.body)
                { new : true }
            )
    
            res.status(200).json({ mensaje: 'Titulo de tarea cambiado 🟢', taskUpdated })
        } catch (error) {
            console.error('Error al modificar le titulo de la tarea 🔴', error);
        }
    },
    async deleteTask (req, res) {
        try {
            const taskId = await TaskModel.findByIdAndDelete(req.params._id)
            res.status(200).json({ mensaje: 'Tarea eliminada 🟢' })
        } catch (error) {
            console.error('Error al eliminar la tarea 🔴', error);
        }
    }
}


module.exports = taskController