//const { Sequelize, DataTypes } = require('sequelize');
import { DataTypes } from 'sequelize'
import { bd } from '../dataBase/conecct.js'

export const Renglon_venta = bd.define('renglon_venta', {
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false

    },

    importe_total:{
        type: DataTypes.STRING,
        allowNull:false
    },

    cod_producto:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false
    },

    nro_venta:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
})

