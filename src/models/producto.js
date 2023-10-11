import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        require: true,
        maxlength:150,
        unique:true
    },
    precioProducto:{
        type: Number,
        require:true
    },
    categoria:{
        type: String,
        require:true
    }
})

const Producto = mongoose.model('producto', productoSchema);

export default Producto;