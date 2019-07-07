const express = require('express');
const router = express();

//User
var UserController = require('../../controller/user.controller')
router.get('/users', UserController.getUser);
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.addUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router