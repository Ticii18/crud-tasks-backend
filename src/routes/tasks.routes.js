import { Router } from "express";
import { getTasks, getTasksById, postTasks, deleteTasksbyID, putTasks } from "../controllers/tasks.controllers.js";
import { validateCreate, validateUpdate, validateDelete } from "../validators/task.validation.js";

const routerTasks = Router();

routerTasks.get('/', getTasks);
routerTasks.get('/:id', getTasksById);
routerTasks.post('/', validateCreate, postTasks);
routerTasks.put('/:id', validateUpdate, putTasks);
routerTasks.delete('/:id', validateDelete, deleteTasksbyID);

export { routerTasks };
