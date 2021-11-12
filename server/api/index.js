const router = require('express').Router();
module.exports = router;
const allProductsPage = require('./AllProducts');

router.use('/users', require('./users'));

router.use('/allproducts', allProductsPage);

router.use('/cart', require('./cart'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
