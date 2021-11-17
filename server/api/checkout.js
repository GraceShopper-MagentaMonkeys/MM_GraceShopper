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
        
        product.quantity --;
        
    }
    
    res.status(200).send(products)
})