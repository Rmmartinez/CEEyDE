import { Router } from 'express'
import bodyParser from 'body-parser';
import { cargaProductos, getProductos, getUnProducto, modificarProductos, eliminarProductos} from '../controller/productos/productos.controller.js';
const router = Router();
router.use(bodyParser.json())

router.get("/productos", getProductos);
// router.post("/cargaProductos",(req,res) =>{
//     console.log("Hola :D ",req.body)
//     cargaProductos(req,res)})
router.post("/cargaProductos",
    cargaProductos)
router.put('/modificarProductos/:id',modificarProductos);
router.put('/eliminarProductos/:id',eliminarProductos);
router.delete('/productos');
router.get("/producto", getUnProducto);

export default router;