const Sequelize = require('sequelize');
const sequelize = require('../config/database');  // Asegúrate de que este archivo esté correctamente configurado

const Cliente = require('./Cliente');
const Alquiler = require('./Alquiler');
const Videojuego = require('./Videojuego');

// Configura las relaciones entre modelos
Cliente.hasMany(Alquiler, { foreignKey: 'customer_id' });
Alquiler.belongsTo(Cliente, { foreignKey: 'customer_id' });

Videojuego.hasMany(Alquiler, { foreignKey: 'video_game_id' });
Alquiler.belongsTo(Videojuego, { foreignKey: 'video_game_id' });

module.exports = {
  sequelize,
  Cliente,
  Alquiler,
  Videojuego,
};
