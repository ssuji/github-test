/**
 * Created by suji on 2017-01-18.
 */

const assert = require('assert');
const should = require('should');
describe('GET /users', () => {
    it('[assert test] should return 200 status code', () => {
        // equal() : 2개의 파라미터 받는데, 값이 같은경우 지나가고/ 다르면 에러던짐
       assert.equal(true, false)

    });

    it('[assert test] int test', () => {
        assert.equal(100,100)
    });

    it('[assert test] string test', () => {
        assert.equal("test assertion", "test assertion");
    });

    // assert는 노드의 기본 모듈,
    // 하지만, 테스트에서는 이거말구 다른 모듈 사용하라고 함 -> 요즘 가장 많이 사용하는 모듈 중 하나가 "should"
    //         should는 서술식의 검증을 코드로 작성할 수 있게함. 마치 글쓰는 것과 같이.
    it('[should test] boolean test', () => {
        (true).should.be.equal(true);
    });

    it('[should test] int test', () => {
        (1000).should.be.equal(1000);
    });

    it('[should test] string test', () => {
        ("is that true?").should.be.equal("is that true?");
    });
});