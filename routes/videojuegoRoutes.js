const express = require('express');
const router = express.Router();
const { Videojuego } = require('../models');

// Obtener todos los videojuegos
router.get('/', async (req, res) => {
    try {
        const videojuegos = await Videojuego.findAll();
        res.json(videojuegos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los videojuegos.' });
    }
});

// Crear un nuevo videojuego
router.post('/', async (req, res) => {
    try {
        const videojuego = await Videojuego.create(req.body);
        res.status(201).json(videojuego);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el videojuego.' });
    }
});

// Actualizar un videojuego
router.put('/:id', async (req, res) => {
    try {
        const videojuego = await Videojuego.findByPk(req.params.id);
        if (videojuego) {
            await videojuego.update(req.body);
            res.json(videojuego);
        } else {
            res.status(404).json({ error: 'Videojuego no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el videojuego.' });
    }
});

// Eliminar un videojuego
router.delete('/:id', async (req, res) => {
    try {
        const videojuego = await Videojuego.findByPk(req.params.id);
        if (videojuego) {
            await videojuego.destroy();
            res.json({ message: 'Videojuego eliminado.' });
        } else {
            res.status(404).json({ error: 'Videojuego no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el videojuego.' });
    }
});

module.exports = router;
