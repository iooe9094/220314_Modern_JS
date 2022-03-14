// 비동기 프로그램
// 상품 가격 계산 프로그램

function buy_asis(item, price, quantity) {
    // 첫번 째 출력
    console.log(item + "상품을" + quantity + "개 골라서 점원에게 주었습니다.")

    // 비동기 로직
    setTimeout(function() {
        
        // 세번 째 출력
        console.log("계산이 필요합니다.")

        // 상품가격
        let total = price * quantity;
        return total;
    }, 2000);
}

// 상품을 지불하는 function
function pay(tot) {
    // 두번 째 출력
    console.log(tot + "원을 지불하였습니다.");
}

let result = buy_asis("고구마", 1000, 5);
pay(result);

// 프로그램 지연으로 인한 오류를 보여주는 코드 (가격이 undefined로 나옴)
// 이를 해결하기 위해 콜백함수를 사용함 ``()

