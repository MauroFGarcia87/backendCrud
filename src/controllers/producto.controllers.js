import { response } from "express";
import Producto from "../models/producto";

const productoCtrl = {};

//Logica para obtener la lista de producto
productoCtrl.listarProductos = async(req, res) =>{

    try {
       // Crear un arreglo con todos los productos
       const listaProductos = await Producto.find();
       res.status(200).json(listaProductos);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'No se pudo obtener el listado de productos'})
    }
}

productoCtrl.borrarProducto = (req, res) =>{
    res.send('Aqui borro los productos');
}
productoCtrl.crearProducto = async(req, res) =>{
    //console.log(req);
    //console.log(req.body);
    
    try {
        // Validar los datos
        //Crear un nuevo objeto para guardar en la base de datos
        const productoNuevo = new Producto({
            nombreProducto: req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            categoria: req.body.categoria
        });

        //Guardar producto en Base de Datos
        await productoNuevo.save();
        // enviar respuesta
        res.status(201).json({
            mensje: 'Producto agregado correctamente'
        });
    } catch (error) {
        console.log(error);
        //enviar mensaje de error
        res.status(400).json({
            mensaje: 'Error al crear un producto'
        });
    }
}

export default productoCtrl;