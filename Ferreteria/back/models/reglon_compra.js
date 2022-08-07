//const {Sequelize, Datatypes }= require ('sequelize');
import { DataTypes } from 'sequelize'
import { bd } from '../dataBase/conecct.js'

export const Reglon_compra = bd.define('reglon_compra',{
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cod_producto :{
        type: DataTypes.STRING,
        allowNull: false
    },
    importe_total :{
        type: DataTypes.STRING,
        allowNull: false
    },
    nrocompra :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
    }
        
})

