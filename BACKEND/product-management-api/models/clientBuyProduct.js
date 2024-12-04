const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Client = require('./client');
const Product = require('./product');

const ClientBuyProduct = sequelize.define('ClientBuyProduct', {
  quantity: { type: DataTypes.INTEGER, allowNull: false },
});

ClientBuyProduct.belongsTo(Client);
ClientBuyProduct.belongsTo(Product);

module.exports = ClientBuyProduct;
