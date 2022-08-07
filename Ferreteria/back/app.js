import bodyParser from "body-parser";
import express from "express";
import productosRoutes from './routes/producto.routes.js'

const app = express();

app.use(bodyParser.json());
//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}))
app.use(productosRoutes)

export default app;

