import express, { json } from "express";
import {router} from "./routes/tasks.routes.js";

const app = express();

//MIDDLEWARE
app.use(json())


//rutas de usuarios

app.use(router)


app.listen(3000, ()=>{
    console.log("El servidor esta corriendo en la ruta http://localhost:3000");
})