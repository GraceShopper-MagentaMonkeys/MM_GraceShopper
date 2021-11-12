const router = require('express').Router();
const {
  models: { User, Product, Cart },
} = require('../db');
module.exports = router;

// mounted in /api/cart

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const userCart = await user.getProducts();
    res.json(userCart);
  } catch (e) {
    next(e);
  }
});

/*router.post('/:id', async (req, res, next) => {
  try{
    const user = await User.findByPk(req.params.id);
    const userCart = await user.getProducts();
    const 
    
    //if (userCart.includes())
  } catch (e){
    
  }
})*/