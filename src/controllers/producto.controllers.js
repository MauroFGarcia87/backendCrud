const productoCtrl = {};

//Logica para obtener la lista de producto
productoCtrl.listarProductos = (req, res) =>{
    res.send('Listar Productos')
}

productoCtrl.borrarProducto = (req, res) =>{
    res.send('Aqui borro los productos');
}

export default productoCtrl;