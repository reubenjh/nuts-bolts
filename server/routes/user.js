const router = require('express').Router()
const verifyJWT = require('express-jwt')
const { getSecret, handleError } = require('../auth/token')
const { getUserByName } = require('../db/users')
const { getGearByUserId } = require('../db/gear')

router.use(
  verifyJWT({
    secret: getSecret
  }),
  handleError
)

// routes below here protected

router.get('/fullProfile', (req, res) => {
  let user = {}

  Promise.all([
    getUserByName(req.user.user_name),
    getGearByUserId(req.user.user_id)
  ])
  .then(([info, gear]) => {
    user = info
    user.gear = gear
    res.json(user)
  })
  .catch(err => {
    console.log(err);
    res.status(500)
    .send({ 
      message: 'error getting user info',
      err 
    })
  })
})


module.exports = router