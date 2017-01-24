/**
 * Created by suji on 2017-01-16.
 */

/*
* ES6 (ECMAScript 2015 : ES6)
* 자바스크립트 새로운 표준 문법
*  - var : 함수스코프 사용O. (기존, ES5 문법의 사용 변수)
*  - const : 함수스코프 사용X.
*  - let : 함수스코프 사용X. 블록스코프 사용O.
*  - arrow function (ex. () => {}) : function keyword 줄여놓은 문법.
*    콜백이 많은 비동기 코드서 사용 시, 가독성이 뛰어남.
*  - require() 함수
*    - CommonJS 구현해 높은 것
*    - 해당 함수는 자바스크립트로 만든 모듈을 가져올 수 있음.
*/

function foo() {
    if (false) {
        var a = 1;
    }
    console.log(a);
}
foo();

function foo2() {
    var a;
    if (false){
        a=1;
    }
    console.log(a);
}
foo2();
//
// function foo3() {
//     if (false) {
//         let a = 1;
//     }
//     console.log(a);
// }
// foo3();

// const는 상수 키워드. 선언과 동시에 값 할당. 이후에는 값 변경 불가.
// const a=1;
// a=2;
// const : 초기화 안되어 에러. 선언과 동시에 값 할당안되어 오류 : syntaxError
// const b;