const router = require('express').Router()
module.exports = router
const allProductsPage = require('./AllProducts')
const users = require('./AllUsers')

router.use('/users', require('./users'))

router.use('/allproducts', allProductsPage)

router.use('/admin', users)

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
