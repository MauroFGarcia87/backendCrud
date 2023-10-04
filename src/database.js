import mongoose from "mongoose";

//Cadena de conexion a la base de datos
const url = 'mongodb://127.0.0.1:27017/crudcafe';

// Conectarce a la base de datos
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('Base de datos conectada');
}); 