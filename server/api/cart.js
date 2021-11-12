const router = require('express').Router();
const {
  models: { User, Product },
} = require('../db');
module.exports = router;

// mounted in /api/cart

// need to define cart model?
// const Cart = db.define('cart', {
//   itemId: Sequelize.INTEGER,
//   references: {
//     model: User,
//     key: 'id'
//   }
// })

// router.get('/:id', async (req, res, next) => {
//   try {
//     const userCart = User.findAll({
//       include: {
//         model: User,
//         as: 'cart',
//         where: {
//           userId: req.params.id,
//         },
//       },
//     });

//     res.json(userCart);
//   } catch (e) {
//     next(e);
//   }
// });
