/**
 * Created by suji on 2017-01-16.
 */

function sum(a,b) {
    return a + b;
}
//sum 함수 외부 노출 -> 모듈화
module.exports = sum;
// node에서는 파일단위로 하나의 모듈을 만들 수 있음.