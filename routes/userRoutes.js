const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/createusers', userController.createUser);
router.get('/getusers', userController.getAllUsers);
router.put('/updateusers/:id', userController.updateUser);
router.delete('/deleteuser/:id', userController.deleteUser);




module.exports = router;
