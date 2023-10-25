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

productoCtrl.obtenerProducto = async(req, res) => {
    try {
        //Obtener el parametro de la ruta
        console.log(req.params.id);
        //Creo el objeto y lo busco en la base de datos
        const productoBuscado = await Producto.findById(req.params.id);
        res.status(200).json(productoBuscado);
    } catch (error) {
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo obtener el producto solicitado'})
    }
}

productoCtrl.borrarProducto = async(req, res) => {
    try {
        //Buscar el producto por el id y borrarlo
      await Producto.findByIdAndDelete(req.params.id)
      res.status(200).json({mensaje: 'Se pudo eliminar el producto solicitado'});
       
    } catch (error) {
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo eliminar el producto solicitado'});
    }
}

productoCtrl.editarProducto = async(req, res) => {
    try {
       //Buscar el producto con el id y modificar los datos que me llegan en el body
       await Producto.findByIdAndUpdate(req.params.id, req.body);
       res.status(200).json({mensaje: 'Se modifico el producto solicitado'});
       
    } catch (error) {
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo modificar el producto solicitado'});
    }
}

export default productoCtrl;