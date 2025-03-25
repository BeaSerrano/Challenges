// Aquí estarán todas las rutas

const express = require('express')
const router = express.Router()
const TaskModel = require('../models/TaskModel')
const taskController = require('../controllers/taskController')

// - POST /create: Endpoint para crear una tarea.
router.post('/create', taskController.createTask)

// - GET /: Endpoint para traer todas las tareas.
router.get('/', taskController.getAllTasks)

// - GET /id/:_id: Endpoint para buscar tarea por id.
router.get('/id/:_id', taskController.getTaskById)

// - PUT /markAsCompleted/:_id: Endpoint para marcar una tarea como completada.
router.put('/markAsCompleted/:_id', taskController.markAsCompleted)

// - PUT /id/:_id: Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea. Es decir, que no me deje cambiar el campo  “completed” desde este endpoint, sino solo, el título.
router.put('/id/:_id', taskController.updateTitle)

// - DELETE /id/:_id: Endpoint para eliminar una tarea.
router.delete('/id/:_id', taskController.deleteTask)


module.exports = router