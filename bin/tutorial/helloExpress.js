// 익스프레스 사용을 위한 처리 : express 패키지 추가
const express = require('express');
const app = express();
// 익스프레스의 요청바디데이터 접근을 위한 처리 : body-parser 패키지 추가
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*
 express 객체는 기본적으로 get(), post() 따위의 라우팅 설정 함수가 존재.
 하지만, get(), post() 함수 사용해 코드 예외처리 등 다 작성하게되면, 코드가 한 파일 안에서 길어짐 -> 가독성 떨어짐.
 이를 해결할 수 있는게, express의 Router 클래스. -> 라우팅 코드 모듈화 가능 (노드의 모듈)
 결국, 라우팅 로직 모듈화 -> 이를 require()함수로 불러 사용할 수 있는 장점 존재.

 %%% 라우팅 모듈화 예 %%%
 const express = require('express');
 const router = express.Router();

 router.get('/users', (req,res) => {
   // ...
 });

 module.exports = router;
 */
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
	//res.writeHead(200, {'Content-Type':'text/plain'});
	res.send('Hello World\n');
});

const users = require('./../moduleTest/app.js');
// let user = users.filter(id, user => {
//     return user.id === id;
// });

//Create
app.post('/users', (req,res) => {
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
});

//Read
app.get('/users', (req,res) => res.json(users));
app.get('/users/:id', (req,res) => {
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
});

//Delete
app.delete('/users/:id', (req,res) => {
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
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}/`);
});

// routing 설정
// app.get('/users', (req,res) => {
//     return res.json(users);
// });

