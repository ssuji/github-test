/**
 * Created by suji on 2017-01-17.
 */

// 익스프레스 사용을 위한 처리 : express 패키지 추가
const express = require('express');
const app = express();
// 익스프레스의 요청바디데이터 접근을 위한 처리 : body-parser 패키지 추가
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const hostname = '127.0.0.1';
const port = 3333;


// user 라우팅 모듈 사용
// express Router클래스로 만든 User 모듈은 익스프레스의 미들웨어가 된 것.
// 따라서, 익스프레스 객체 app은 use() 함수로 이 미들웨어를 사용할 수 있게된 것.

//주의할점 : use()에서 파라미터2개 사용하는 경우: 라우팅 모듈을 설정할 때.
// 아래코드의 의미는 '모든 request 중 경로가 /users로 시작되는 요청에 대해선 2번째 파라미터로 오는 미들웨어가 담당하도록 한다'
app.use('/users', require('./usersAPI.js'));

app.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}/`);
});


module.exports = app;