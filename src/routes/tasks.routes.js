const routes = require("express").Router()
const {index, getTasks,getTasksById,postTasks,deleteTasksbyID,putTasks } = require("../controllers/tasks.controllers")


routes.get('/', index)

routes.get('/tasks/',getTasks )

routes.get('/tasks/:id',getTasksById)

routes.post('/tasks/',postTasks );

routes.put('/tasks/:id' ,putTasks )

routes.delete('/tasks/:id',deleteTasksbyID )

module.exports = routes