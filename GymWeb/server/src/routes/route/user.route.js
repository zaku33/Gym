const express = require('express');
const router = express();

var userCRUD = require('../../controller/generalCRUD.controller');

router.get('/user', userCRUD._ReadAll);
router.get('/user/:id', userCRUD._ReadOne);
router.post('/user', userCRUD._Create);
router.put('/user/:id', userCRUD._Update);
router.delete('/user/:id', userCRUD._Delete);

module.exports = router