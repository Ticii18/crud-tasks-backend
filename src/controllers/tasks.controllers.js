const db = require('../db/db');

const getTasks = async (req, res) => {
    try {
        const conex = await db(); 
        const [tasks] = await conex.query('SELECT * FROM `tasks`');  
        res.status(200).json(tasks); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al traer las tareas' });
    }
};

const getTasksById = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'El ID debe ser un número válido' });
    }

    try {
        const conex = await db(); 
        const [tasks] = await conex.query('SELECT * FROM `tasks` WHERE `id` = ?', [id]);  
        if (tasks.length === 0) {
            return res.status(404).json({ error: 'La tarea no existe' });
        }
        res.status(200).json(tasks[0]); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al traer la tarea' });
    }
};

const postTasks = async (req, res) => {
    const { title, description, isComplete } = req.body;
    if (!title || !description || typeof isComplete !== 'boolean') {
        return res.status(400).json({ error: 'Datos inválidos en la solicitud' });
    }

    try {
        const conex = await db();
        await conex.query('INSERT INTO `tasks`(`title`, `description`, `isComplete`) VALUES (?, ?, ?)', [title, description, isComplete]);
        res.status(201).json({ message: 'La tarea se creó correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al crear la tarea' });
    }
};

const deleteTasksbyID = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'El ID debe ser un número válido' });
    }

    try {
        const conex = await db();
        const [tarea] = await conex.query('SELECT * FROM `tasks` WHERE `id` = ?', [id]);
        if (tarea.length === 0) {
            return res.status(404).json({ error: 'La tarea no existe' });
        }
        
        await conex.query('DELETE FROM `tasks` WHERE `id` = ?', [id]);
        res.status(200).json({ message: 'La tarea se eliminó correctamente', tareaEliminada: tarea[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al eliminar la tarea' });
    }
};

const putTasks = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { title, description, isComplete } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({ error: 'El ID debe ser un número válido' });
    }

    if (title === undefined || description === undefined || typeof isComplete !== 'boolean') {
        return res.status(400).json({ error: 'Datos inválidos en la solicitud' });
    }

    try {
        const conex = await db();
        const [tarea] = await conex.query('SELECT * FROM `tasks` WHERE `id` = ?', [id]);
        if (tarea.length === 0) {
            return res.status(404).json({ error: 'La tarea no existe' });
        }

        await conex.query('UPDATE `tasks` SET `title` = ?, `description` = ?, `isComplete` = ? WHERE `id` = ?', [title, description, isComplete, id]);
        res.status(200).json({ message: 'La tarea se actualizó correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al actualizar la tarea' });
    }
};

module.exports = { getTasks, getTasksById, postTasks, deleteTasksbyID, putTasks };
