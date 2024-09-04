const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    identification: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
    },
    phone: {
        type: DataTypes.STRING(20),
    },
    address: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: 'Customers',
    timestamps: false,
});

module.exports = Cliente;
