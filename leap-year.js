
function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}

isLeapYear(2100);
const leapYear = isLeapYear(2100);
console.log('The year is leap year or not:', leapYear);