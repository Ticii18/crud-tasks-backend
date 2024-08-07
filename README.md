# CRUDD TASKS BACKEND

Este proyecto es una API para la gestión de tareas, construida con Node.js, Express y MySQL. Proporciona operaciones CRUD básicas para la administración de tareas.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express**: Framework para construir aplicaciones web en Node.js.
- **mysql2**: Driver nativo para interactuar con bases de datos MySQL.
- **express-validator**: Dependencia para las validaciones.

## Instalación

1. Clona este repositorio:

    git clone https://github.com/Ticii18/crud-tasks-backend.git

2. Navega al directorio del proyecto:

    cd crud-tasks-backend

3. Instala las dependencias:

    npm install express morgan mysql2 express-validator

4. Configura la base de datos MySQL. Asegúrate de tener una base de datos creada y actualiza los detalles de conexión en el archivo de configuración .
   ## Base de Datos

1. Crea una base de datos MySQL llamada `tasks_db`.

    ```sql
    CREATE DATABASE tasks_db;
    ```

2. Crea una tabla llamada `tasks` con las siguientes columnas:

    ```sql
    CREATE TABLE tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        isComplete BOOLEAN DEFAULT FALSE
    );
    ```

## Rutas API

### POST /tasks

Añade una nueva tarea.

**Cuerpo de la solicitud:**
{
  "title": "Título de la tarea",
  "description": "Descripción de la tarea"
}

**Respuesta:**
- **Código de estado 201**: La tarea ha sido creada exitosamente.
- **Código de estado 400**: Error en la validación de los datos.

### GET /tasks

Obtiene todas las tareas.

**Respuesta:**
- **Código de estado 200**: Lista de tareas en formato JSON.

### GET /tasks/:id

Obtiene una tarea específica por su ID.

**Parámetros de la URL:**
- `id`: ID de la tarea a obtener.

**Respuesta:**
- **Código de estado 200**: Datos de la tarea solicitada.
- **Código de estado 404**: Tarea no encontrada.

### PUT /tasks/:id

Actualiza una tarea específica por su ID.

**Parámetros de la URL:**
- `id`: ID de la tarea a actualizar.

**Cuerpo de la solicitud:**
{
  "title": "Nuevo título de la tarea",
  "description": "Nueva descripción de la tarea"
}

**Respuesta:**
- **Código de estado 200**: Tarea actualizada exitosamente.
- **Código de estado 404**: Tarea no encontrada.
- **Código de estado 400**: Error en la validación de los datos.

### DELETE /tasks/:id

Elimina una tarea específica por su ID.

**Parámetros de la URL:**
- `id`: ID de la tarea a eliminar.

**Respuesta:**
- **Código de estado 200**: Tarea eliminada exitosamente.
- **Código de estado 404**: Tarea no encontrada.

## Ejecución

Para iniciar el servidor, utiliza el siguiente comando:

    npm run dev

El servidor escuchará en el puerto especificado en la configuración.
