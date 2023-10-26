import mongoose from "mongoose";

//Cadena de conexion a la base de datos
//const url = 'mongodb://127.0.0.1:27017/crudcafe';
const url = 'mongodb+srv://maurofgarcia87:MauLet32@cluster0.nm6qcyv.mongodb.net/crudcafe';

// Conectarce a la base de datos
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('Base de datos conectada');
}); 