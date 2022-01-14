const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");

// validationResult
const { runValidation } = require("../validators");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", requireSignin,signout);

router.get("/secret", requireSignin, (req, res) => {
  console.log(req.user);
  res.json({
    user: req.user,
  });
});

module.exports = router;
