// 동기 프로그램
// 상품 가격 계산 프로그램

// 상품 값 계산하는 function
// return : 총 물건값
function buy_normal(item, price, quantity) {
    
    // 첫번 째 출력
    console.log(item + "상품을" + quantity + "개 골라서 점원에게 주었습니다.")
    // 두번 째 출력
    console.log("계산이 필요합니다.")

    // 상품가격
    let total = price * quantity;
    return total;
}

// 상품을 지불하는 function
function pay(tot) {
    // 세번 째 출력
    console.log(tot + "원을 지불하였습니다.");
}

let result = buy_normal("고구마", 1000, 5);
pay(result);