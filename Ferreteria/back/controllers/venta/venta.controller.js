import {Venta} from '../../models/venta.js'


export const getVentas = async (req, res) =>{
    const ventas = await Venta.findAll()
    console.log(ventas)
    res.send('ventas')
}

/*export const getUnVenta = async(req,res) =>{
    const venta = await Venta.findAll({
        where:{
            //cod_producto : 'c002'
        }
    });
    console.log(venta)
    res.send('venta')
}*/


export const createVentas =(req, res) =>{
    res.send('creando Ventas')
}