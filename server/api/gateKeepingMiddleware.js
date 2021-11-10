const { models: { User } } = require('../db/index')

// you can see the list of users just if they are logged in
const requireToken = async (req, res, next) => {

  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next()
  } catch (error) {
    next(error);
  }

}

// checking if user is Admin
const isAdmin = (req, res, next) => {

  if (req.user.isAdmin) {

    res.status(403).send('You do not have the access!!!')

  } else {
    next()
  }

}


module.exports = {
  requireToken,
  isAdmin,
}
