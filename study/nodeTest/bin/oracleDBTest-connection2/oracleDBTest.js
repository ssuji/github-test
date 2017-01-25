/**
 * Created by suji on 2017-01-23.
 */
var express = require('express');
var router = express.Router();

var db = require('./db.js');

router.use(function(req,res,next){
   console.log('Time: ', Date.now()) ;
   next();
});
router.get('/', db.func);

module.exports = router;