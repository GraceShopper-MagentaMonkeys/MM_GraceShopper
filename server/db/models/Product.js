const Sequelize = require('sequelize')
const db = require('../db')

// product name, product price, description, quantity INT, category

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      defaultValue: 1,
      allowNull: false
    }
  },
  category: {
    type: Sequelize.ENUM(['food/drink', 'style', 'home']),
    validate: {
      allowNull: false,
      defaultValue: 'home'
    }
  }
})


module.exports = Product
