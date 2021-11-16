const router = require("express").Router();
// const { unstable_renderSubtreeIntoContainer } = require('react-dom');
const { models: { Product, Cart, User  } } = require("../db");
const { isAdmin, requireToken } = require("./gateKeepingMiddleware");

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

//udpate a product for admin
router.put('/:productId/edit', requireToken, isAdmin, async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.productId);
    res.send(await singleProduct.update(req.body));
  } catch (error) {
    next(error);
  }
});

//remove a product for admin
router.delete('/:productId/edit', requireToken, isAdmin, async (req, res, next) => {
  try {
    const singleProject = await Product.findByPk(req.params.productId);
    await singleProject.destroy();
    res.send(singleProject);
  } catch (error) {
    next(error);
  }
});

