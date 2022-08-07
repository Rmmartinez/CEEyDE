import { DataTypes } from 'sequelize'
import { bd } from '../dataBase/conecct.js'



export const Producto = bd.define('productos',{
    nombre: {
        type: DataTypes.STRING,
        primaryKey:true,
        allowNull: false
    },

    cod_producto:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },

    precio_venta:{
        type:DataTypes.STRING,
        allowNull: false
    },

    precio_compra:{
        type:DataTypes.STRING,
        allowNull:false
    },

    stockmin:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

    stockactual:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },

    flagp:{
        type: DataTypes.INTEGER,
        allowNull:false

    },

    unidadmedida:{
        type:DataTypes.STRING,
        allowNull:false
    },

    proveedor:{
        type:DataTypes.STRING,
        allowNull:true

    },
    imagen:{
        type:DataTypes.STRING,
        allowNull:false
    },
    timestamps: false,
    createdAt: false,
    updatedAt: false
    


});







