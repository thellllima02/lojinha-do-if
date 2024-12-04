const express = require('express');
const ClientBuyProduct = require('../models/clientBuyProduct');
const Client = require('../models/client');
const Product = require('../models/product');
const router = express.Router();

// Criar uma nova compra
router.post('/', async (req, res) => {
  try {
    const { clientId, productId, quantity } = req.body;
    const purchase = await ClientBuyProduct.create({ ClientId: clientId, ProductId: productId, quantity });
    res.status(201).json(purchase);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar todas as compras
router.get('/', async (req, res) => {
  try {
    const purchases = await ClientBuyProduct.findAll({
      include: [Client, Product],
    });
    res.json(purchases);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Atualizar uma compra
router.put('/:id', async (req, res) => {
  try {
    const purchase = await ClientBuyProduct.findByPk(req.params.id);
    if (!purchase) return res.status(404).json({ error: 'Purchase not found' });
    await purchase.update(req.body);
    res.json(purchase);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Deletar uma compra
router.delete('/:id', async (req, res) => {
  try {
    const purchase = await ClientBuyProduct.findByPk(req.params.id);
    if (!purchase) return res.status(404).json({ error: 'Purchase not found' });
    await purchase.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
