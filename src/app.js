const express = require("express")
const routes = require("./routes/tasks.routes")

const app = express();

//MIDDLEWARE
app.use(express.json())


//rutas de usuarios

app.use(routes)


app.listen(3000, ()=>{
    console.log("El servidor esta corriendo en la ruta http://localhost:3000");
})