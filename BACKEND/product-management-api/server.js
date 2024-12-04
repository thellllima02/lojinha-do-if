require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');

// Importando as rotas
const clientRoutes = require('./routes/client');
const productRoutes = require('./routes/product');
const purchaseRoutes = require('./routes/purchase');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Usando as rotas
app.use('/clients', clientRoutes);
app.use('/products', productRoutes);
app.use('/purchases', purchaseRoutes);

// Sincronização do BD e inicialização
sequelize.sync({ force: true }).then(() => {
  console.log('Database synced!');
  app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000!'));
});
