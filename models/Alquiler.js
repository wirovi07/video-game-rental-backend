const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Videojuego = require('./Videojuego');
const Cliente = require('./Cliente');

const Alquiler = sequelize.define('Alquiler', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    video_game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Videojuego,
            key: 'id',
        },
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'id',
        },
    },
    rental_start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    rental_end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    total_price: {
        type: DataTypes.DECIMAL(10, 2),
    },
}, {
    tableName: 'Rentals',
    timestamps: false,
});

module.exports = Alquiler;
