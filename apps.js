// Lecture //





var cloudy = true;
var planes = planes >= 10;

function goodDayToFly( planes, cloudy ) {
    if (cloudy === true && planes) {
        console.log("Today might not be a good")
    } else {
        console.log("Your in the clear");
    }
}
goodDayToFly(false, 22)



function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}

let fullName = getFullName("Thomas", "Fredricks");
console.log(fullName);

function dob(year, month, day){
    return year + month + day;
}
console.log(
    dob(2021, "Jan", 12)
);

function drinksToday(yesterday, today, tommorow) {
    return yesterday + today + tommorow;
}
console.log(
    drinksToday(2,2,2)
);

function financesSpentThisMonth(startingBalance, spentAmount) {
    return startingBalance - spentAmount;
}
console.log(
    financesSpentThisMonth(4000, 3000)
);

function product(numberOne, numberTwo){
    return numberOne * numberTwo;
}
console.log(
    product(1234, 5678)
);
function dividend(numberThree, numberFour) {
    return numberThree / numberFour;
}
console.log(
    dividend(1000, 500)
);
function remainder(numberFive, numberSix) {
    return numberFive % numberSix;
}
console.log(
    remainder(10, 2)
);