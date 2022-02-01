// formula  A=P(1+rt)
// A=final amount r=rate of interest t=time (years)  p=initial principal balance

function simpleInterest(time, rate, initPrincipal) {
    let finalAmount = initPrincipal * (1 + rate * time);
    return finalAmount;
}

let allPrice = simpleInterest(5, 4, 2000);
console.log(allPrice);