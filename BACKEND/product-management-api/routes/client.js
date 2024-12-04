const express = require('express');
const Client = require('../models/client');
const router = express.Router();

router.post('/', async (req, res) => {
  const client = await Client.create(req.body);
  res.status(201).json(client);
});

router.get('/', async (req, res) => {
  const clients = await Client.findAll();
  res.json(clients);
});

router.put('/:id', async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  if (!client) return res.status(404).send('Client not found');
  await client.update(req.body);
  res.json(client);
});

router.delete('/:id', async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  if (!client) return res.status(404).send('Client not found');
  await client.destroy();
  res.status(204).send();
});

module.exports = router;
