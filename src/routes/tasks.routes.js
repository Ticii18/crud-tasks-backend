import { Router } from "express"
import { getTasks, getTasksById, postTasks, deleteTasksbyID, putTasks } from "../controllers/tasks.controllers.js"
import { validateCreate, validateUpdate, validateDelete } from "../validators/task.validation.js"

const router = Router()




router.get('/tasks/',getTasks )

router.get('/tasks/:id',getTasksById)

router.post('/tasks/',validateCreate ,postTasks );

router.put('/tasks/:id' ,validateUpdate,putTasks )

router.delete('/tasks/:id',validateDelete,deleteTasksbyID )

export {router}