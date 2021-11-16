const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;
const { requireToken, isAdmin } = require('./gateKeepingMiddleware')

//create a product for admin
router.post('/',requireToken, isAdmin, async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch(error) {
    next(error)
  }
})
