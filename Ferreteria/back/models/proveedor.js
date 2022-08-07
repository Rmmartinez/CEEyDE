//const {Sequelize, Datatypes }= require ('sequelize');
import { DataTypes } from 'sequelize'
import { bd } from '../dataBase/conecct.js'
//import { Compra} from './compra.js'
export const Proveedor = bd.define('proveedores',{
    nombre: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    cod_proveedor :{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    flag :{
        type: DataTypes.INTEGER,
        allowNull: false
    },
        
})

