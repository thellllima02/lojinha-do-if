const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;  

const clientRoutes = require('./route/client'); 
const productRoutes = require('./route/product');  
const purchaseRoutes = require('./route/purchase');  
const apiRoutes = require('./route/api');

app.use(express.json());

app.use(cors()); 
app.use(express.json()); 

app.use('/clients', clientRoutes); 
app.use('/products', productRoutes);  
app.use('/purchases', purchaseRoutes);  
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);  
});