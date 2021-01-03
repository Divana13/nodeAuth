const {Router} = require('express');
const authController = require('../controller/authController');

const router = Router();

router.get('/signup', authController.signupGet);
router.post('/singup', authController.signupPost);
router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);


module.exports = router