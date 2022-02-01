//5= 5*4*3*2*1=120
function fact(factNum) {
    var factorial = 1;
    for (var i = 1; i <= factNum; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var factorialResult = fact(7);
console.log(factorialResult);