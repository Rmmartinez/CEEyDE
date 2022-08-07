import { Router } from 'express'
import bodyParser from 'body-parser';
import { cargaProductos, getProductos, getUnProducto, modificarProductos } from '../controllers/productos/productos.controller.js';
const router = Router();
router.use(bodyParser.json())

router.get("/productos", getProductos);
router.post("/cargaProductos",(req,res) =>{
    console.log("Hola :D ",req.body)
    cargaProductos(req,res)})
router.put('/modificarProductos/:id',modificarProductos);
router.delete('/productos');
router.get("/producto", getUnProducto);

export default router;