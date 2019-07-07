const express = require('express');
const router = express();
const authenticae = require('../controller/authenticate.controller')

router.use('/',[
    require('./route/login.route'),
    require('./route/user.route')
])

module.exports = router