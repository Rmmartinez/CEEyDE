import { Router } from 'express'
import { getVentas, createVentas } from '../controllers/venta/venta.controller.js';
const router = Router();

router.get("/ventas", getVentas);
router.post("/ventas", createVentas);
// router.put('/ventas');
// router.delete('/ventas');
//router.get("/ventas", getUnVenta);

export default router;