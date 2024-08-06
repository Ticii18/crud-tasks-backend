const db = require('../db/db')


const index = (req, res) => {
    res.send("Hola mundo")
}

const getTasks = async (req, res) => {
    try {
        const conex = await db(); 
        const [tasks] = await conex.query('SELECT * FROM `tasks`');  
        res.status(200).json(tasks); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'hubo un error a la hora de traer las tareas' });
    }
};


const getTasksById = async (req, res) => {
    const id = req.params.id;
    try {
        const conex = await db(); 
        const [tasks] = await conex.query('SELECT * FROM `tasks` where id = ?',[id]);  
        res.status(200).json(tasks); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'hubo un error a la hora de traer las tareas' });
    }
}

const postTasks = async (req, res) => {
    const { title, description, isComplete } = req.body;

    // Validaciones
    if (typeof title !== 'string' || title.trim() === '' || title.length > 255) {
        return res.status(400).json({ error: 'El titulo no puede estar vacio y debe ser menor a 255 caracteres' });
    }

    if (typeof description !== 'string' || description.trim() === '') {
        return res.status(400).json({ error: 'La descripcion no debe estar vacia y debe contener solamente letras' });
    }

    if (typeof isComplete !== 'boolean') {
        return res.status(400).json({ error: 'El campo isComplete, solo acepta datos booleanos' });
    }

    try {
        const conex = await db();
        await conex.query('INSERT INTO `tasks`( `title`, `description`, `isComplete`) VALUES (?,?,?)', [title, description, isComplete]);
        res.status(201).json({ message: 'La tarea se creo correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error a la hora de crear la tarea' });
    }
};

const deleteTasksbyID = async (req, res) => {

}

const putTasks = (req, res) => {

}

module.exports = { index, getTasks, getTasksById, postTasks, deleteTasksbyID, putTasks }