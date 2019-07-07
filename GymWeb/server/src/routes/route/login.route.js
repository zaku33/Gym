const express = require('express');
const router = express();

//User
var Login = require('../../controller/authenticate.controller')
router.post('/admin', Login.login);
router.post('/login', Login.userLogin)


module.exports = router