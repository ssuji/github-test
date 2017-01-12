
## Node.js vs vert.x

 * 공통점
  * single thread model
  * 고성능 비동기 서버 (async | non-blocking IO)
 * 두 서버 모두 C10K문제 해결 가능 
  * C10K = 대용량(10,000개 이상의 동시 connection) 처리 하기 위한 문제 
 * 두 서버 모두 connection 연결되면, <br/> 연결된 socket들을 잡고있다가 -> singleThread의 eventLoop이 고속으로 돌면서 socket에 들어온 메시지들을 처리 -> 놓는 구조
  * 따라서, 동시에 여러 사용자 처리가능
 * 주의할 점 : single thread model이라 context switching이 없고, 이로 인해 '성능이 더 빠르다'는 설이 있는데, DB나 File IO가 있는 경우에는 WAS가 더 빠르다. 
 
 
--- | Node.js | vert.x
--- | --- | ---
--- | single thread model </br>고성능 비동기 서버 | single thread model </br>고성능 비동기 서버
사용가능언어 | javascript,C | javascript,java,python,ruby,groovy,scala등
내부엔진기반 | google chrome V8 자바스크립트 엔진 <br/> libuv 기반 비동기 처리 IO | Netty기반 NW IO <br/> Hazel Case 기반 클러스터링
클러스터링 | 1 HW당 여러 node.js 띄우기 가능 <br/> node.js 인스턴스 간 상태 share불가 | 1 HW당 여러 vert.x 띄우기 가능 <br/> node간 상태공유 메시징 가능 (HazelCast기반)
자료 | 풍부 <br/> 레퍼런스,서적,교육  | 부족 <br/> 공식서적 적음, 교육업체도 적음
 
 
 
 * 요약
  * 기술적으로는 vert.x가 good : 더 높은 성능, 여러 프로그래밍 언어 지원
  * 기술습득 or 운영유지보수에서는 node.js가 good
