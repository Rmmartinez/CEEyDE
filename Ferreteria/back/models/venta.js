//const { Sequelize, DataTypes } = require('sequelize');
import { DataTypes } from 'sequelize'
import { bd } from '../dataBase/conecct.js'
//import{Empleado} from './empleado.js'


export const Venta = bd.define('ventas', {
    fecha:{
        type: DataTypes.DATE,
        allowNull: false

    },

    hora:{
        type: DataTypes.STRING,
        allowNull:false
    },

    descuento:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

    cod_empleado:{
        type:DataTypes.STRING,
        allowNull:false
    },

    nro_venta:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },

    monto_total:{
        type: DataTypes.STRING,
        allowNull:false
    }
    ,
    timestamps: false,
    createdAt: false,
    updatedAt: false

});

// Venta.hasOne(Empleado, {
//     foreignKey:'cod_empleado',
//     sourceKey:'cod_empleado'
// })

// Venta.hasMany(Empleado,{
//     foreingKey:'cod_empleado',
//     targetId:'cod_empleado'
// })
