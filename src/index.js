import express from 'express';
console.log('Hola BackEnd');

// Crear un puerto para el servidor
// Creo un instancia de express
const app = express();

// Crear un puerto con express
app.set('port', process.env.PORT || 4000)

// Decirle a express que escuche el puerto que acabamos de crear en la variable anterior
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'));
})

