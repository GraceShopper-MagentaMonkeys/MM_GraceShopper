const router = require('express').Router()
const { models: { User }} = require('../db')
const { requireToken } = require('../../server/api/gateKeepingMiddleware')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body)});
  } catch (err) {
    next(err)
  }
})


router.post('/signup', async (req, res, next) => {
  try {
    const { username , password, email, imageUrl } = req.body

    if (imageUrl === '') {
      delete req.body.imageUrl
    }

    const user = await User.create({ username, password, email})
    res.send({token: await user.generateToken()})

  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.get('/me', requireToken, async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})
