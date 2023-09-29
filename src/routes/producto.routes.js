import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

// Crear Rutas
router.route("/").delete(productoCtrl.borrarProducto).post(productoCtrl.crearProducto).get(productoCtrl.listarProductos);

export default router;