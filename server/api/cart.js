const router = require('express').Router();
const {
  models: { User, Product, Cart },
} = require('../db');
module.exports = router;

// mounted in /api/cart

// JOE_CR: Any cart can be viewed by any user/client, since it does not compare a logged in user here.
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const userCart = await user.getProducts();
    res.json(userCart);
  } catch (e) {
    next(e);
  }
});
