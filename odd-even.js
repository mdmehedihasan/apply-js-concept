function isEven(checkNum) {
    if (checkNum % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function isOdd(checkNum) {
    if (checkNum % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}

const isMyNumberEven = 121;
console.log(isEven(isMyNumberEven));

const isHerNumEven = 1776;
console.log(isEven(isHerNumEven));

const isMyNumOdd = 1781;
const res = isOdd(isMyNumOdd);
console.log('odd number is :=', res);
