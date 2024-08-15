const express = require('express');
const { check } = require('express-validator');
const authPage = require('../Controller/authController');
// const { authorize,protect } = require('../Middleware/authMiddleware');

const router = express.Router();


router.post("/register",[
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],authPage.registerUser)




router.post("/login", [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
],authPage.loginUser)



router.get("/getUser",authPage.getUser)






module.exports = router;
