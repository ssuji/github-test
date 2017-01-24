/**
 * Created by suji on 2017-01-23.
 */
var express = require('express');
var router = express.Router();

var dao = require('./oracleTest.js');

router.post('/', dao.insert);
router.get('/', dao.select);
router.get('/:id', dao.find);
router.delete('/:id', dao.delete);

module.exports = router;