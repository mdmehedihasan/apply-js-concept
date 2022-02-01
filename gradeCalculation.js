let number = -101;

if (number >= 80 && number <= 100) {
    console.log('You Got A+');
}
else if (number >= 70 && number < 80) {
    console.log("You got A");
}
else if (number >= 60 && number < 70) {
    console.log("You got 'A-'");
}
else if (number >= 50 && number < 60) {
    console.log("You got 'B'");
}
else if (number >= 40 && number < 50) {
    console.log("You got 'c'");
}
else if (number >= 33 && number < 40) {
    console.log("You got 'D'");
}
else if (number >= 0 && number < 33) {
    console.log("You are fail, try in next year");
}
else {
    console.log("You insert a wrong number. please check it again");
}