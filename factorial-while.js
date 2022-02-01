function fact(factNum) {
    let factorial = 1;
    let i = factNum;
    while (i >= 1) {
        factorial = factorial * i;
        i--;

    }
    return factorial;
}

let factResult = fact(5);
console.log(factResult);