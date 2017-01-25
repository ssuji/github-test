/**
 * Created by suji on 2017-01-18.
 */
// 보통 파일명에 'spec'이란 문자열 들어가면 테스트코드
// 테스트 코드 자체가 테스트 대상의 명세서(specification) 되므로 그렇게 부름

const assert = require('assert');
const should = require('should');
const request = require('supertest'); //request 상수에 supertest 모듈 할당.
const app = require('../moduleTest/mainUsedIndex')

describe('GET /users', () => {
   it('should return 200 status code', () => {
       console.log('test 1');
   }) ;

   it('[supertest] request API status test', (done) => {

       // app 모듈을 supertest모듈상수의 파라미터로 넣은 것 : 만든 익스프레스서버인 app을 슈퍼테스트로 테스트하겠다는 의도
       request(app).get('/users').expect(200).end((err,res) => {
           //1. 함수체이닝을 이용해 get()함수로 API 요청 보냄
           //2. expect 함수로 응답코드 설정,
           //3. 실제요청을 보내고 응답하면 end()함수에 파라미터로 넣은 콜백함수가 동작하게 되는 구조
           //   3-1. 해당 콜백함수는 err와 res 2 파라미터를 받는데, 요청에 실패시 err 객체 활성화/ 성공시 res.body 통해 응답바디에 접근 가능
           if(err) throw err;
           done(); // it()함수의 2번째 파라미터인 콜백함수의 파라미터=지금, 슈퍼테스트가 HTTP요청하는 비동기 로직.
                    // 모카 측에서 it()함수 종료되는 시점 알기위해 사용되는 함수
       })
   });

    it('[supertest] request API body check test', (done) => {
      request(app).get('/users').expect(200).end((err,res) => {
         if(err) throw err;
         // console.log(res.body.Array.length);
         // for(var i=0; i<res.body.instanceOf(Array).lengt; i++) {
         //     console.log(res.body.instanceOf(Array)[i]);
         // }

         res.body.should.be.an.instanceOf(Array).and.have.length(3);
         res.body.map(user => {
            user.should.have.properties('id', 'name');
            user.id.should.be.a.Number();
            user.name.should.be.a.String();
         });
         done();
      });
    });
});