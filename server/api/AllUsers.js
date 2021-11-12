const router = require("express").Router();

const { models: { User } } = require("../db");
module.exports = router;

router.get('/', async (req, res, next) => {

  try {

    const allUser = await User.findAll()
    res.send(allUser)

  } catch (error) {
    next(error);
  }
})
