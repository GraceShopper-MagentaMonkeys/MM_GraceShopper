const router = require('express').Router();
// const { unstable_renderSubtreeIntoContainer } = require('react-dom');
const {
  models: { User, Product, Cart },
} = require('../db');
module.exports = router;

//   mounted in /api/allproducts

router.get('/', async (req, res, next) => {
  try {
    const allProduct = await Product.findAll();
    res.send(allProduct);
  } catch (e) {
    next(e);
  }
});

// single product  /api/allproducts/:productId
router.get('/:productId', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.productId);
    res.send(singleProduct);
  } catch (e) {
    next(e);
  }
});

router.post('/:productId', async (req, res, next)=> {
  try{
    // user 1 , product 1
    
    const product = await Product.findByPk(req.params.productId); 
    const user = await User.findByPk(req.body.userId); 
    const userCart = await user.getProducts(); 
    
    if(user.includes(product)){
      const cartItem = await user.getProduct({ where: { productId: product.Id}}); 
      const qty = cartItem.quantity ; 
      qty ++
      Cart.update({quantity: qty}, 
        { where:{
          productId: product.id,
          userId: user.id
        }})
    } else {
      
      product.addUser(user);
      
    }
    
  } catch (e){
    console.log(e);
  }
})
//udpate a product for admin
router.put('/:productId/edit', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.productId);
    res.send(await singleProduct.update(req.body));
  } catch (error) {
    next(error);
  }
});
//remove a product for admin
router.delete('/:productId/edit', async (req, res, next) => {
  try {
    const singleProject = await Product.findByPk(req.params.productId);
    await singleProject.destroy();
    res.send(singleProject);
  } catch (error) {
    next(error);
  }
});

