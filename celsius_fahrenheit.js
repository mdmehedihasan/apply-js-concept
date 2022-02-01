//c=(f-32)/1.8
function fahrenheitToCelsius(giveFahrenheit) {
    let convertedCelsius = (giveFahrenheit - 32) / 1.8;
    return convertedCelsius;
}

let celsius = fahrenheitToCelsius(28);
console.log(celsius);

function celsiusToFahrenheit(giveCelsius) {
    let convertedFahrenheit = (giveCelsius * 1.8) + 32;            //f=(c*1.8)+32
    return convertedFahrenheit;
}
let fahrenheit = celsiusToFahrenheit(-2.2222222222222223);
console.log(fahrenheit);