import express, { json } from "express";
import cors from "cors";
import { routerTasks } from "./routes/tasks.routes.js";

const app = express();

// Middleware
app.use(json());
app.use(cors());

// Rutas de tareas
app.use("/api/tasks", routerTasks);

app.listen(3000, () => {
    console.log("El servidor está corriendo en la ruta http://localhost:3000");
});
