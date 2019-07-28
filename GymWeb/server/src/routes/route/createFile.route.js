const express = require('express');
const router = express();

const model = require('../../controller/createFile.controller')
router.post('/model',model.CreateModel)


module.exports = router