const sequelize = require('../config/database');
const { Cliente, Videojuego, Alquiler } = require('../models');

async function seedDatabase() {
    try {
        // Sincronizar la base de datos
        await sequelize.sync({ force: true });
        console.log('Base de datos sincronizada.');

        // Crear clientes
        const cliente1 = await Cliente.create({
            identification: '111111111',
            name: 'Carlos López',
            email: 'carlos.lopez@example.com',
            phone: '3001112233',
            address: 'Calle Falsa 123'
        });

        const cliente2 = await Cliente.create({
            identification: '222222222',
            name: 'Ana García',
            email: 'ana.garcia@example.com',
            phone: '3012223344',
            address: 'Carrera Verdadera 456'
        });

        console.log('Clientes creados.');

        // Crear videojuegos con precios predefinidos
        const videojuego1 = await Videojuego.create({
            name: 'Spider-Man',
            year: 2018,
            genre: 'Action-adventure',
            release_date: '2018-09-07',
            console_type: 'PlayStation',
            daily_rental_price: 10
        });

        const videojuego2 = await Videojuego.create({
            name: 'Halo Infinite',
            year: 2021,
            genre: 'First-person shooter',
            release_date: '2021-12-08',
            console_type: 'Xbox',
            daily_rental_price: 9
        });

        const videojuego3 = await Videojuego.create({
            name: 'Animal Crossing: New Horizons',
            year: 2020,
            genre: 'Simulation',
            release_date: '2020-03-20',
            console_type: 'Nintendo',
            daily_rental_price: 5
        });

        console.log('Videojuegos creados.');

        // Crear alquileres de ejemplo
        const rentalStartDate1 = new Date('2024-09-01');
        const rentalEndDate1 = new Date('2024-09-06'); // 5 días (lunes a viernes, sin contar el fin de semana)
        const totalPrice1 = (10 * 5) * 0.90; // Aplica 10% de descuento

        await Alquiler.create({
            video_game_id: videojuego1.id,
            customer_id: cliente1.id,
            rental_start_date: rentalStartDate1,
            rental_end_date: rentalEndDate1,
            total_price: totalPrice1
        });

        const rentalStartDate2 = new Date('2024-09-08');
        const rentalEndDate2 = new Date('2024-09-15'); // 7 días (incluye fin de semana)
        const totalPrice2 = (9 * 5) * 0.85; // Aplica 15% de descuento

        await Alquiler.create({
            video_game_id: videojuego2.id,
            customer_id: cliente2.id,
            rental_start_date: rentalStartDate2,
            rental_end_date: rentalEndDate2,
            total_price: totalPrice2
        });
//hola
        console.log('Alquileres creados.');
        console.log('Base de datos poblada con datos semilla.');

    } catch (err) {
        console.error('Error al poblar la base de datos:', err);
    } finally {
        sequelize.close(); // Cierra la conexión con la base de datos
    }
}

// Ejecuta la función de semillas
seedDatabase();
