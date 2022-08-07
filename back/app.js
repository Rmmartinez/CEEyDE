
import cors  from 'cors';
import bodyParser from "body-parser";
import express from "express";
import productosRoutes from './routes/producto.routes.js'

// Crear el Servidor
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));


app.use(bodyParser.json());
//middlewares
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}))
app.use(productosRoutes)

export default app;

