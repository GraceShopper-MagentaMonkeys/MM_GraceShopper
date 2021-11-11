const router = require('express').Router()
// const { unstable_renderSubtreeIntoContainer } = require('react-dom');
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
//udpate a product for admin
router.put('/:productId/edit', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.productId);
    res.send( await singleProduct.update(req.body))
  } catch(error) {
    next(error)
  }
})
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
