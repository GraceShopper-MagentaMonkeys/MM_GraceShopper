const Sequelize = require('sequelize');
const db = require('../db');

// cart model
const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
});

module.exports = Cart;
