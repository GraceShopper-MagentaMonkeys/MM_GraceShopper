const router = require('express').Router()
module.exports = router
const allProductsPage = require('./AllProducts')
// const users = require('./AllUsers')

router.use('/admin', require('./users'));

router.use('/allproducts', allProductsPage);


router.use('/create', require('./adminCreate'))

router.use('/cart', require('./cart'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
