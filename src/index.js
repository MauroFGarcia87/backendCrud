import express from 'express';
import res from 'express/lib/response';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes/producto.routes';

console.log('Hola BackEnd');

// Crear un puerto para el servidor
// Creo un instancia de express
const app = express();

//Los midlewares o configuraciones extra
app.use(morgan('dev')); // Da informacion extra a la terminal
app.use(cors()); //Permoite recibir peticiones  remotas

//Permite reibir objetos en formato json
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//Mostrar una pagina por defecto
console.log(path.join(__dirname, '../public'));
app.use(express.static(path.join(__dirname, '../public')))

// Crear un puerto con express
app.set('port', process.env.PORT || 4000)

// Decirle a express que escuche el puerto que acabamos de crear en la variable anterior
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'));
})

// Crear Rutas
app.use('/apicrud', router);


