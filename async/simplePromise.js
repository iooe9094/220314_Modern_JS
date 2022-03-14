// 1번
// let _promiss = function(param) {
//     return new Promise(function(resolve, reject) { // 성공시 resolve 실패시 reject
//         // 3초 후에 실행되는 비동기 함수
//         setTimeout(function() {
//             if(param == true) {
//                 resolve('해결완료');
//             }
//             else {
//                 reject(Error('실패!'));
//             }
//         }, 3000);
//     });
// }

// _promiss(true).then(function(text) {
// // _promiss(true).
// // then(function(text) { 위의 코드와 동일하지만 깔끔하게 보이기 위해 단락 내림
//     console.log(text);
// }, function(error) {
//     console.log(error);
// });

// 2번
let wait = (inputStr, callback) => { // inputStr : 문자열
    // 비동기
    setTimeout(() => {
        console.log(inputStr);
        callback();
    }, 1000);
}

// wait 함수 호출
// 1초 후에 실행되는 콜백함수
// 콜백지옥으로 프로그래밍 됨
wait('A', () => {
    wait('B', () => {
        wait('C', () => {
            return; // for문은 break, 함수는 return하면 탈출함
        });
    });
});