const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Videojuego = sequelize.define('Videojuego', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    console_type: {
        type: DataTypes.ENUM('PlayStation', 'Xbox', 'Nintendo'),
        allowNull: false,
    },
    daily_rental_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
},{
    tableName: 'VideoGames',
    timestamps: false,
});

module.exports = Videojuego;
