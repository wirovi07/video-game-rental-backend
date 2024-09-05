require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');

const clienteRoutes = require('./routes/clienteRoutes');
const videojuegoRoutes = require('./routes/videojuegoRoutes');
const alquilerRoutes = require('./routes/alquilerRoutes');

app.use(express.json());

app.use('/api/clientes', clienteRoutes);
app.use('/api/videojuegos', videojuegoRoutes);
app.use('/api/alquileres', alquilerRoutes);

const PORT = process.env.PORT || 3001; 

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});