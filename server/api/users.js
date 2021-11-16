const router = require('express').Router();
const {
  models: { User },
} = require('../db');
module.exports = router;

// requireToken will let just the logged in users to see the informations
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email', 'imageUrl','createdAt'],
      where: {
        isAdmin: false
      }
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.delete('/:userId', async (req, res, next) => {

  try {
    const userToRemove = await User.findByPk(req.params.userId)
    await userToRemove.destroy();

    res.send(userToRemove);

  } catch(error){
    next(error);
  }
})
