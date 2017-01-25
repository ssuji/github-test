/**
 * Created by suji on 2017-01-17.
 */
// 라우팅 모듈 생성
const express = require('express');
const router = express.Router();


const controller = require('./userController.js');

router.post('/', controller.create);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.delete('/:id', controller.destroy);


module.exports = router;