//Function Practice//  Below is HM Exercise //

//var cloudy = true;
//var planes = planes >= 10;

//function goodDayToFly( planes, cloudy ) {
//    if (cloudy === true && planes) {
//        console.log("Today might not be a good")
//    } else {
//        console.log("Your in the clear");
//    }
// }
//goodDayToFly(false, 22)



//function getFullName(firstName, lastName){
//    return firstName + " " + lastName;
//}

//let fullName = getFullName("Thomas", "Fredricks");
//console.log(fullName);

//function dob(year, month, day){
//    return year + month + day;
// }
//console.log(
//    dob(2021, "Jan", 12)
//);

//function drinksToday(yesterday, today, tommorow) {
//    return yesterday + today + tommorow;
// }
//console.log(
//    drinksToday(2,2,2)
// );

// function financesSpentThisMonth(startingBalance, spentAmount) {
//    return startingBalance - spentAmount;
// }
// console.log(
//    financesSpentThisMonth(4000, 3000)
// );

//function product(numberOne, numberTwo){
//    return numberOne * numberTwo;
// }
//console.log(
//    product(1234, 5678)
//);
//function dividend(numberThree, numberFour) {
//    return numberThree / numberFour;
// }
//console.log(
//    dividend(1000, 500)
// );
// function remainder(numberFive, numberSix) {
//    return numberFive % numberSix;
// }
//console.log(
//    remainder(10, 2)
// );



// let isAtBar = true;
// let bac = .06;
// let age = 45;
// let cashOnHand = 5.00;


// let canHaveADrink = (isAtBar && bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

//if (canHaveADrink) { // true or false
//    console.log("Have a brewski my guy!");
//} else { // it was not true
//    console.log("Sorry buddy, no brew for u");
//}
//
//let validId = true;
//let ageValidation = 21;
//let cashOnHand = 20.00;

//let canEnterClub = (ageValidation && cashOnHand >= 15.00 && validId)

//if (canEnterClub) {
//    console.log("Welcome valued customer");
//} else {
//    console.log("Sorry my friend");
//

    "use strict";

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     * sayHello(name)
     * console.log
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */

    function sayHello(name) {
        return sayHello + name + "!" ;
    }
    console.log(sayHello("codeup"))

    //   function financesSpentThisMonth(startingBalance, spentAmount) {
//    return startingBalance - spentAmount;
// }
// console.log(
//    financesSpentThisMonth(4000, 3000)
// );


    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */
var helloMessage =sayHello("Therman")
    console.log(helloMessage);

       /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */
var  myName = sayHello(myName)
    {
        console.log(sayHello)
    }
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function istwo(number) {
    return number === 2;
}
console.log(istwo(random));



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(tip, total) {
    return (total * tip);
}
console.log(calculateTip(tipAmount: .2, totalBill: 100))
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
 let tipPercentage = prompt("What percentage")
let calculateTip = prompt("What percentage is the tip? (1-100)")
let totalBill = prompt("What is your total")
let tipAmount = calculateTip(tipPercentage, totalBill)
let newtotal = tipAmount + totalBill;
alert("your tip amount is $" + tipAmount + "" + newtotal)
/**
 *
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
 function applyDiscount(price, discountPercentage) {
     return price * (price * discountPercentage))
}

console.log(applyDiscount(price:100, discountPercentage: .2))
