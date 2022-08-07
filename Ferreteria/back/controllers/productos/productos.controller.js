import {Producto} from '../../models/producto.js'
//const productoC = Document.getElementById('productos')

export const getProductos = async (req, res) =>{

        const productos = await Producto.findAll({
            where:{
                flagp:1
            },
            order:[
                ['nombre', 'ASC'],
        ] 
        })
        res.send(productos)
}

export const getUnProducto = async(req,res) =>{
    const prod = await Producto.findAll({
        where:{
            cod_producto : req.params.cod_producto
        }
    });
    console.log(prod)
    res.send('producto')
}


export const cargaProductos = async (req, res) =>{

    const{nombre, cod_producto, precio_venta, stockactual, descripcion, proveedor, imagen}= req.body
    
    const nuevoProd= await Producto.create({
        nombre, 
        cod_producto, 
        precio_venta,
        precio_compra: 0, 
        stockmin: 0,
        stockactual,
        descripcion, 
        flagp:1, 
        unidadmedida: 'unidad', 
        proveedor,
        imagen
    })
    //res.status(201).json({message: "Successfully Registered", status: 201})
    //res.send('envio exitosos');
}

export const modificarProductos = async (req, res) =>{
    try{
        const{id}= req.params;
        const{precio_venta, stockactual, descripcion, proveedor}= req.body;
        const modProd= await Producto.findOne({ where: { cod_producto: id } });
        modProd.precio_venta= precio_venta
        modProd.stockactual= stockactual
        modProd.descripcion= descripcion
        modProd.proveedor= proveedor
    
        await modProd.save();
        res.json(modProd);
    }
    catch (error){
        return res.status(500).json({message: error.message});
    }
   
}