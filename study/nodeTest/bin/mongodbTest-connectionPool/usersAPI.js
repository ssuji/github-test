/**
 * Created by suji on 2017-01-17.
 */
// 라우팅 모듈 생성
var express = require('express');
var router = express.Router();


// schema
var User = require('./dbModel.js');
//console.log(User);
//var controller = require('./userController.js');

router.post('/', create);
router.get('/', index);
router.get('/:id', show);
router.delete('/:id', destroy);

function create(req, res) {
   // console.log(req);
   // console.log(req.body);

    var id = req.body.id;
    var name = req.body.name || '';
    if (!name.length) {
        return res.status(400).json({error:'Incorrect name'});
    }
    var sex = req.body.sex;
    var addr = req.body.addr;
    var phone = req.body.phone;

    var user = new User({'_id':id,'name':name,'sex':sex,'addr':addr,'phone':phone});
    user.save(function(err,silence){
        if(err){
            console.log(err);
            return res.status(500).send('create error');
        }
        return res.status(200).send('create success');
    });
}

function index (req, res) {
    //console.log("why?");
    User.find({},function(err,docs){
        if(err) console.log('err');
        return res.send(docs);
    });
}

function show (req, res) {
    var id = parseInt(req.params.id, 10);
    // :id 값이 숫자가 아니면 NaN 리턴(에러잡을 수 있음)
    // if문에서 NaN == false 동일
    // 단, id가 숫자로 시작하는 문자면 해당에서 안걸리네.
    if(!id) {
        return res.status(400).json({error:'Incorrect ID'});
    }
    //console.log(id);

    User.find({_id:id},function(err,doc){
        if(err) console.log('err');
        return res.send(doc);
    });
}

function destroy (req, res) {
    var id = parseInt(req.params.id, 10);
    if(!id) {
        return res.status(400).json({error:'Incorrect ID'});
    }
    //console.log(id);

    User.remove({_id:id},function(err,result){
        if(err) console.log('err');

       // console.log(result.result);

        return res.status(200).send('delete success!');
    });
}
module.exports = router;