const router = require("express").Router();
// const { unstable_renderSubtreeIntoContainer } = require('react-dom');
const { models: { Product, Cart, User  } } = require("../db");
const { isAdmin } = require("./gateKeepingMiddleware");

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

//products of a single category /api/allproducts/sort/:productCategory
router.get('/sort/:productCategory', async (req, res, next) => {
  try {
    const productsCategory = await Product.findAll({
      where : {
        category: req.params.productCategory
      }
    })
    res.send(productsCategory)
  } catch (e) {
    next(e)
  }
})

// JOE_CR: To follow RESTful conventions, this need only be 
router.post('/:productId/add', async (req, res, next)=> {
  try{

    const product = await Product.findByPk(req.params.productId);
    const user = await User.findByPk(req.body.userId);
    let usersProducts = await user.getProducts();
    usersProducts = usersProducts.map(ele => ele.dataValues.id);

    // JOE_CR: This is great and a good way of going about this create or add split.
    // However, I would suggest looking into Sequelize model's `findOrCreate` method
    // and think about how it could be used here instead.
    if(usersProducts.includes(product.id)){
      const cartItem = await Cart.findOne({
        where: {
          productId: product.id,
          userId: user.id
      }});
      let qty = cartItem.quantity ;
      qty ++
      // JOE_CR: You're using a bulk update here when you have a reference to the row you want to update
      // (`cartItem`). I would suggest using the update operation off of that instance instead.
      await Cart.update({ quantity: qty },
        { where: {
          productId: product.id,
          userId: user.id
        }})

    } else {

      await user.addProduct(product);

    }
    // JOE_CR: Confusing and misleading formatting!
      res.status(200).end();


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
// JOE_CR: It doesn't seem like /edit should be a part of this route's URL.
router.delete('/:productId/edit',async (req, res, next) => {
  try {
    const singleProject = await Product.findByPk(req.params.productId);
    await singleProject.destroy();
    res.send(singleProject);
  } catch (error) {
    next(error);
  }
});

