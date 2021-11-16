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

router.post('/:userId/add', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.body.productId);
    const user = await User.findByPk(req.params.userId);
    let usersProducts = await user.getProducts();
    usersProducts = usersProducts.map(ele => ele.dataValues.id);

      if (usersProducts.includes(product.id)){
        
        const cartItem = await Cart.findOne({
          where: {
            productId: product.id,
            userId: user.id
        }});
        
        let qty = cartItem.quantity ;
        qty ++
        
        await Cart.update({ quantity: qty },
          { where: {
            productId: product.id,
            userId: user.id
          }})
          
      } else {
  
        await user.addProduct(product);
  
      }
    
    res.status(200).end();
    
  } catch (e){
    console.log(e)
  }
})