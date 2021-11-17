const router = require('express').Router();
const {
  models: { User, Product, Cart },
} = require('../db');
module.exports = router;
const { requireToken } = require("./gateKeepingMiddleware");

router.put('/', requireToken, async (req, res, next) => {
    
    const user = req.user.id;
    
    const products = await Product.findAll({
        include: {
            model: User,
            where: {
                id: user
            }
        }
    });
    
    
    for(let i = 0 ; i < products.length ; i++){
        const product = products[i];
        
        
        product.quantity = product.quantity - product.users[0].cart.quantity;
        await product.save();
        
        await Cart.destroy({
            where: {
                productId: product.id,
                userId: user
            }
        });
        
        
    }
    
    res.status(200)
})