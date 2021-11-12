const router = require('express').Router();
const {
  models: { User, Product },
} = require('../db');
const { requireToken, isAdmin } = require('./gateKeepingMiddleware');
module.exports = router;

// requireToken will let just the logged in users to see the informations
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
