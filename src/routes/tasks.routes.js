const routes = require("express").Router()
const {getTasks,getTasksById,postTasks,deleteTasksbyID,putTasks } = require("../controllers/tasks.controllers")
const {validateCreate, validateUpdate, validateDelete}= require("../validators/task.validation")




routes.get('/tasks/',getTasks )

routes.get('/tasks/:id',getTasksById)

routes.post('/tasks/',validateCreate ,postTasks );

routes.put('/tasks/:id' ,validateUpdate,putTasks )

routes.delete('/tasks/:id',validateDelete,deleteTasksbyID )

module.exports = routes