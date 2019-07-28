const express = require('express');
const router = express();

//User
var Login = require('../../controller/authenticate.controller')
router.post('/admin', Login.admin_Login);
router.post('/login', Login.user_Login);


module.exports = router