// Aqui ira el modelo de la tarea con los campos title, completed y los timestamps

const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
}, { timestamps: true })

const TaskModel = mongoose.model('TaskModel', TaskSchema)

module.exports = TaskModel