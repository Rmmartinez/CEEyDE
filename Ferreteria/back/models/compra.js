//const { Sequelize, DataTypes } = require('sequelize');
import { DataTypes } from 'sequelize'
import { bd } from '../dataBase/conecct.js'
import{Empleado} from './empleado.js'
import{Proveedor} from './proveedor.js'

export const Compra = bd.define('compras', {
    importe_total:{
        type: DataTypes.STRING,
        allowNull: false

    },

    cod_empleado:{
        type: DataTypes.STRING,
        allowNull:false
    },

    cod_proveedor:{
        type:DataTypes.STRING,
        allowNull:false
    },

    nro_compra:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement : true,
        allowNull:false
    },

    fecha:{
        type:DataTypes.STRING,
        allowNull:false
    },

    hora:{
        type: DataTypes.STRING,
        allowNull:false
    }


})
/*Compra.hasOne(Empleado, {
    foreignKey:'cod_empleado',
    sourceKey:'cod_empleado'
})

Empleado.hasMany(Compra,{
    foreingKey:'cod_empleado',
    targetId:'cod_empleado'
})
Compra.hasOne(Proveedor,{
    foreingKey:'cod_proveedor',
    sourceKey: 'cod_proveedor'
})
Proveedor.belongsTo(Compra,{
    foreingKey:'cod_empleado',
    targetId:'cod_empleado'
})*/
