const express = require('express')
const router = express.Router()

const {signin, signup,signout, requireSignin } = require('../controllers/auth')
// Validators 
const { runValidation }= require('../validators/index')
const { userSignupValidator, userSigninValidator }= require('../validators/auth')

router.post('/signup', userSignupValidator, runValidation,  signup)
router.post('/signin', userSigninValidator, runValidation,  signin)
router.get('/signout', signout)

router.get('/secret',requireSignin, (req,res)=>{
  res.json({
    message:"you accses to secret page"
  })
})



module.exports = router 