const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;
const { isAdmin } = require('./gateKeepingMiddleware')

//create a product for admin
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body))
  } catch(error) {
    next(error)
  }
})
