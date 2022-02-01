var time = '10:15';
var bookPrice = 150;
var isMicColorWhite = true;

//array
var partner = ['sajid', 'mojid', 'hafij'];
console.log(partner.length);
var mojIndex = partner.indexOf('mojid');
partner.push('rajit');
partner.pop();
partner.shift();
partner.unshift('riyaj');

//conditionals

if (bookPrice < 120) {
    console.log('I will by this book');
}
else {
    console.log('kicu discount den na mama. Apni na mama!!1');
}

//loop

var i = 0;
while (i < 5) {
    console.log('I will buy book');
    i++
}
for (var i = 0; i < 5; i++) {
    console.log('i will buy definitely');
}

//function
function isMoonUp(time) {
    if (time >= 19 || time <= 5) {
        return true;
    }
    else {
        return false;
    }

}


var moonStatus = isMoonUp(20);
console.log(moonStatus);

//let const
var price = 27;
price = 29;
price = 20;