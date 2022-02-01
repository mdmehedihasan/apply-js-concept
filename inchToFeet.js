
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}


var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my iches in feet=', feet);



var naniInches = 156;
console.log(inchToFeet(naniInches));


// var nanaInches = 162;
// var feet = nanaInches / 12;

//mile to kilometer

function mileTokilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var finalResult = mileTokilometer(5);
console.log(finalResult);



