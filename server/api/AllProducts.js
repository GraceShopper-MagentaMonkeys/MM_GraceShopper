const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

//   mounted in /api/allproducts

router.get('/', async (req, res, next) => {
  try {
    const allProduct = await Product.findAll();
    res.send(allProduct);

  }catch(e) {
    next(e);
  }
})


// single product  /api/allproducts/:productId
router.get('/:productId', async (req, res, next) => {
  try {

    const singleProduct = await Product.findByPk(req.params.productId);
    res.send(singleProduct);

  } catch (e) {
    next(e);
  }
})
