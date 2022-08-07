//const {Sequelize, Datatypes }= require ('sequelize');
import { DataTypes } from 'sequelize'
import { bd } from '../dataBase/conecct.js'
import{Compra} from './compra.js'
export const Empleado = bd.define('empleados',{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni :{
        type: DataTypes.STRING,
        allowNull: false
    },
    cod_empleado :{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    flag :{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    domicilio :{
        type: DataTypes.STRING,
        allowNull: false
    },
    contacto :{
        type: DataTypes.STRING,
    }
});





