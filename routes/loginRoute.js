const express = require('express');
const router = express.Router();
// const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');


router.post('/register',loginController.register);
router.get('/login',loginController.login);







module.exports = router;