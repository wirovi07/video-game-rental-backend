const express = require('express');
const router = express.Router();
const { Cliente } = require('../models');

// Obtener todos los clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los clientes.' });
    }
});

// Crear un nuevo cliente
router.post('/', async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el cliente.' });
    }
});

// Actualizar un cliente
router.put('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (cliente) {
            await cliente.update(req.body);
            res.json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el cliente.' });
    }
});

// Eliminar un cliente
router.delete('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (cliente) {
            await cliente.destroy();
            res.json({ message: 'Cliente eliminado.' });
        } else {
            res.status(404).json({ error: 'Cliente no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el cliente.' });
    }
});

module.exports = router;
