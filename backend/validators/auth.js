const {check} = require('express-validator')

exports.userSignupValidator = [
      check('name')
      .not()
      .isEmpty()
      .withMessage('Name is requires'),

      check('email')
      .isEmail()
      .withMessage('Must be valid email adress'),
      
      check('password')
      .isLength({min:6})
      .withMessage('Password must be at least 6 characters long ')
]

exports.userSigninValidator = [
  check('email')
  .isEmail()
  .withMessage('Must be valid email adress'),
  
  check('password')
  .isLength({min:6})
  .withMessage('Password must be at least 6 characters long ')
]