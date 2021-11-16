const Sequelize = require('sequelize')
const db = require('../db')

// product name, product price, description, quantity INT, category

// JOE_CR: Consider more validations for columns of this model like `notEmpty` and `isUrl`.
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
      allowNull: false,
      defaultValue: 1,
  },
  // JOE_CR: How many more categories will you add over time? Should this be modeled differently in order to allow an
  // admin user to add categories as needed?
  category: {
    type: Sequelize.ENUM(['food/drink', 'style', 'home']),
    defaultValue: 'home',
      allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})


module.exports = Product
