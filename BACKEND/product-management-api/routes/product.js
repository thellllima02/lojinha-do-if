const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// Criar um novo produto
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Atualizar um produto
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Deletar um produto
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    await product.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
