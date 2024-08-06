const mysql = require('mysql2/promise');

const db = async () => {
    try {
        const conex = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'tasks_db'
        });
        console.log('Conexión exitosa');
        return conex;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;
    }
};

module.exports = db;