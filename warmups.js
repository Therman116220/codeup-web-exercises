//var name = "codeup"
//function reverseString(name)
//return name.reverse;
//console.log(reverseString);

//reverseString(name);
//
"use strict"

/* function tellMeIfTheDoggoWasGood(){
   var  isAGoodDog = true;
    return isAGoodDog
    ? "such a good boy!"
        : "Eh, He could be a better dog";
}

console.log(tellMeIfTheDoggoWasGood());
function wereTheyReallyAGoodDog(){
    return isAGoodDog;
}
 */

let weather = "";

if (weather === "sunny") {
    console.log("wear shorts")
} else if (weather === "cold") {
    console.log("Wear a jacket")
} else if (weather === "rain") {
    console.log("wear a jacket and use a umbrella");
} else {
    console.log("nothing worthy of note, wear whatever")
}




/*let name = "Mike";

function nameCheck(name)


if (name === "Mike") {
    console.log("your name is Mike");
} if else (name === "Raf") {
    console.log("Your name is Raf");
    if else (name === "LANNA") {
        console.log("My name is Lanna")
    }
}
 */

let myAge = 21;
let actualAge = 21;
  function checkAge(givenAge, actualAge) {
    console.log(givenAge)
      if (givenAge !== actualAge) {
        console.log("you lie");
    } else {
        console.log("You got my age right")
    }
}

checkAge(myAge, actualAge);

var A = 90;
var B = 80;
var C = 70;
var D = 60;
var Axel = A;
var Chris = B;
var Max = C;
var Joseph = D;
var Trix = A;
  function gradeChecker(Axel,Chris, Max, Joseph, Trix) {

  }


let student = Chris;

if (student === A) {
    console.log("You Got a A")
} else if (student === B) {
    console.log("You got a B")
} else if (student === C) {
    console.log("You got a C");
} else {
    console.log("you failed")
}
gradeChecker(Joseph)



function letterGrade(studentG) {
    if (studentG >= 90) {
        console.log("A")
    } else if (studentG >= 80) {
        console.log("you got a B")
    } else if (studentG >= 70) {
        console.log("you got a C")
    } else if (studentG >= 60) {
        console.log("you got a D")
    } else {
    console.log("F")
    }
}
letterGrade(88)


// 4 === "4" ? console.log("matches") : console.log("not matches");

//let weather = "sunny"
//let temp == "90"
//weather == "rainy"
//        ? temp == "90"
//        ? console.log("matches")
//        : console.log("not matches")
//        : console.log("Its sunny")



//function letterGrade(studentGrade {
//    if (studentGrade >= 90) {
//       console.log("You did amazing")
//    } else if (studentGrade >= 80) {
//        console.log("You passed with a B")
//    } else if (studentGrade >= 70)
//        else {
//            console.log("You must try again")
//    }
//    letterGrade(90)

// })









/*
let numGrade = 80
let student = "steve";
numGrade >= 80 || student == "bob"
    ? console.log("you got a b")
    : console.log("you got a eighty");
*/
/*
function grading(


switch (numGrade, student){
    case numGrade >= 90 || student == "Bob":
        console.log("You got a A");
        break;
    case numGrade >= 80 || student == "Jerry" :
        console.log("You got a B");
        break;
    case numGrade >= 70 || student == "Tom" :
        console.log("Just made it with a C");
        break;
    default :
        console.log("you failed...")
}

)
grading();
*/
let grade = function (input) {
    let temp = math.floor(input / 10);
    switch (temp) {
        case 1:
            return "A";
        case 2:
            return "B";
        case 3:
            return "C"
        case 4:
            return "D";
        case 5:
            return "E";

        default :
            return "F";
    }


}




var luckyNumber = 6;
var box;
switch (luckyNumber) {
    case 1:
        box = "not a winner";
        break;
    case 2:
        box = "not a winner";
        break;
    case 3:
        box = "winner"
        break;
    case 4:
        box = "not a winner";
        break;
    case 5:
        box = "not a winner";
        break;

    default :
        box = "runner up";
        break;
}
console.log(box)



var questionAnswer = 3;
var option;
switch (questionAnswer) {
    case 1:
        option = "wrong answer";
        break;
    case 2:
        option = "wrong answer";
        break;
    case 3:
        option = "Correct"
        break;
    case 4:
        option = "wrong answer";
        break;
    case 5:
        option = "wrong answer";
        break;

    default :
        option = "please pick a option";
        break;
}
console.log(option)
/*

var grade = 90
var student;

switch (student);
*/

/*

let calculator = function(num1, num2, calctype) {
    if (calcType === "add"){
        return num1 + num2;
    } else if (calcType === "subtract"){
        return  num1 - num2;
    } else if (calcType === "multiply") {
        return num1 * num2;
    } else if (calctype === "divide") {
        return num1 / num2;
    } else if (calctype === "remainder") {
        return num1 % num2;
    }
}
console.log(calculator(1,1,"add"));

let calc = function(num1, num2, calctype) {
    switch (calctype === "add") {
        case num1 + num2 : "Why add?"
    }
}
*//* Write a function
that accepts the top three bowling scores and
     returns the average.
    *Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not
*Write a function that
accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case BONUS: write a function that returns “TheBestBowlingPlaceEver” and return it all lowercase with a space between each word
*Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”]; Write a function that returns the type of each of the variables (call the function once per variable);
*Write a function that executes all of the above functions
*Copy and execute the following functions, and find the Error: (Hint: try console logging the result) */
    let firstScore = 120;
    let secondScore = 234;
    let thirdScore = 90;
function bowling(score1, score2, score3) {
    let average = (score1 + score2 +score3) /3;
    return average;


    console.log(bowling(firstScore, secondScore, thirdScore));
}


let score = 109;
let name = "bowling is fun";
let isBowlingFun = true;
let players = ["tom", "jerry", "garfield"];
function findType(passedVar) {
    return typeof passedVar;
}
console.log(findType(isBowlingFun))};
score name players
console.log(findType(score));
console.log(findType(name));
console.log(findType(players));

function myFunction(firstName,lastName) {
    return firstName + "" + lastName;
};
console.log(myFunction("Therman", "Haynes"));









