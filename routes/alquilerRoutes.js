const express = require('express');
const router = express.Router();
const { Alquiler, Cliente, Videojuego } = require('../models');

// Obtener todos los alquileres
router.get('/', async (req, res) => {
    try {
        const alquileres = await Alquiler.findAll({
            include: [Cliente, Videojuego]
        });
        res.json(alquileres);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los alquileres.' });
    }
});

// Crear un nuevo alquiler
router.post('/', async (req, res) => {
    try {
        const alquiler = await Alquiler.create(req.body);
        res.status(201).json(alquiler);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el alquiler.' });
    }
});

// Actualizar un alquiler
router.put('/:id', async (req, res) => {
    try {
        const alquiler = await Alquiler.findByPk(req.params.id);
        if (alquiler) {
            await alquiler.update(req.body);
            res.json(alquiler);
        } else {
            res.status(404).json({ error: 'Alquiler no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el alquiler.' });
    }
});

// Eliminar un alquiler
router.delete('/:id', async (req, res) => {
    try {
        const alquiler = await Alquiler.findByPk(req.params.id);
        if (alquiler) {
            await alquiler.destroy();
            res.json({ message: 'Alquiler eliminado.' });
        } else {
            res.status(404).json({ error: 'Alquiler no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el alquiler.' });
    }
});

module.exports = router;
