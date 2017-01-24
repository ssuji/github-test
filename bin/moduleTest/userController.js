/**
 * Created by suji on 2017-01-17.
 */
// /users API 처리 함수 모듈 - 외부에서 require() 함수로 불러 사용

const users = require('./app.js');

exports.create = (req, res) => {
    console.log(req);
    console.log(req.body);

    const name = req.body.name || '';
    if (!name.length) {
        return res.status(400).json({error:'Incorrect name'});
    }

    // 새로운 id 만드는 로직 :  id 상수에는 users 배열에 있는 id 값 중 가장 큰 값 + 1 할당
    const id = users.reduce((maxId, user) => {
            return user.id > maxId ? user.id : maxId}, 0) + 1; //maxId 초기값 0. user는 users 배열의 첫번째 요소.

    const newUser = {
        id: id,
        name: name
    };

    users.push(newUser);

    return res.status(201).json(newUser); // 201 created 코드 보내는 것이 REST API 형식 따르는 것
};
exports.index = (req, res) => {res.json(users)};
exports.show = (req, res) => {
    const id = parseInt(req.params.id, 10);
    // :id 값이 숫자가 아니면 NaN 리턴(에러잡을 수 있음)
    // if문에서 NaN == false 동일
    // 단, id가 숫자로 시작하는 문자면 해당에서 안걸리네.
    if(!id) {
        return res.status(400).json({error:'Incorrect ID'});
    }
    console.log(req.params.id);

    let user = users.filter(user => user.id === id)[0];
    if(!user) {
        return res.status(404).json({error: 'Unknown user'});
    }

    return res.json(user);
};
exports.destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(!id) {
        return res.status(400).json({error:'Incorrect ID'});
    }
    console.log(req.params.id);

    // let user = users.filter(user => user.id === id)[0];
    // if(!user) {
    //     return res.status(404).json({error: 'Unknown user'});
    // }

    const userIdx = users.findIndex(user => {
        return user.id === id;
    });
    if(userIdx === -1) {
        return res.status(404).json({error: 'Unknown user'});
    }

    users.splice(userIdx, 1);

    return res.json(users);

    //res.status(204).send();
};
