import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

// Crear Rutas
router
  .route("/")
  .post(productoCtrl.crearProducto)
  .get(productoCtrl.listarProductos);

router
  .route("/:id")
  .get(productoCtrl.obtenerProducto)
  .delete(productoCtrl.borrarProducto)
  .put(productoCtrl.editarProducto);

export default router;
