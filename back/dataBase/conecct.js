import Sequelize from 'sequelize';
//const Sequelize = require('sequelize');


export const bd = new Sequelize('Ferreteria', 'postgres', 'chevrolet2', {
    host: 'localhost',
    dialect: 'postgres',
})

