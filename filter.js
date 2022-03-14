// filter 1
// filter = 펑션의 조건이 참인 결과만 선택해서 새로운 배열을 만든다.
// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.filter(function(number) {
//     return number > 3;
// })

// // 원본 배열
// console.log(numbers);
// // filter로 만들어진 배열
// console.log(result);

// filter 2
// let guys = [
//     {name: "YD", money:500000},
//     {name: "Bill", money:400000},
//     {name: "Andy", money:300000},
//     {name: "Rocky", money:200000},
// ];

// let rich = guys.filter(function(man) {
//     return man.money > 300000;
// })

// console.log(guys);
// console.log(rich);

// Test 1. filter를 쓰는 형태로 변경하세요.
// let numbers = [1, 2, 3, 4, 5];
// let result = [];
// for (let i=0; i<numbers.length; i++) {
//     if (numbers[i] < 3) {
//         result.push(numbers[i]);
//     }
// }
// console.log(result);

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.filter(function(test) {
//     return test < 3;
// })
// console.log(result);

// Test 2. filter를 쓰는 형태로 변경하세요.
// let numbers = [1,2,3,4,5];
// let result = [];
// for (let i=0; i<numbers.length; i++) {
//     if (numbers[i] > 2 && numbers[i] < 4) {
//         result.push(numbers[i]);
//     }
// }
// console.log(result);

// let numbers = [1,2,3,4,5];
// // let result = numbers.filter(function(num) {
// //     return (num > 2 && num <4);
// // })
// let result = numbers.filter((num) => num>2 && num<4)
// console.log(result);

// Test 3. "YD"인 사람의 money를 뽑아내어 새로운 배열 생성하고 출력
let guys = [
    {name: "YD", money:500000},
    {name: "Bill", money:400000},
    {name: "Andy", money:300000},
    {name: "Rocky", money:200000}
];

// let rich = guys.filter(function(man) {
//     return man.name == "YD";
// });
let rich = guys.filter((man)=> man.name=="YD");

console.log(rich);

