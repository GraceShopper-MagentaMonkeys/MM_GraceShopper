const { models: { User } } = require('../db/index')

// you can see the list of users just if they are logged in
const requireToken = async (req, res, next) => {

  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    // JOE_CR: Possibly there should be a step right here that checks to see if you found a user with the token,
    // or that the token header exists at all, and send back an error response and not call next if no user/token.
    req.user = user;
    next()
  } catch (error) {
    next(error);
  }

}

// checking if user is Admin
const isAdmin = (req, res, next) => {
  // JOE_CR: This sort of thing should not be necessary to do. You should be able to know that your requesting user
  // is an admin by using their token to get their user from the database. This is likely also not a secure way because
  // a savvy user can add "{auth: {isAdmin: true}}" to their request body and identify as an admin.
  if (!req.body.auth.isAdmin) {
    res.status(403).send('You do not have the access!!!')
  } else {
    next()
  }

}


module.exports = {
  requireToken,
  isAdmin,
}
