//Working With Data Types, Operators, and Variables//

var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log(a);
console.log(b);
console.log(c);
//  Predictions //
// 1 //
// 1 //
// 2 //


var d = "hello";
var e = false;

d++;
e++;
console.log(d);
console.log(e);

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed);

var price = 2.7;
price.toFixed(2);

console.log(price);

var price = "2.7";
price.toFixed(2);

console.log(price);


isNaN(0);
console.log(isNaN);

isNaN(1);
console.log(isNaN);

isNaN("");
console.log(isNaN);

isNaN("string")
console.log(isNaN);

isNaN("0")
console.log(isNaN);

isNaN("1")
console.log(isNaN);

isNaN("3.145")
console.log(isNaN);

isNaN(Number.MAX_VALUE)
console.log(isNaN);

isNaN(Infinity)
console.log(isNaN);

isNaN("true")
console.log(isNaN);

isNaN(true)
console.log(isNaN);

isNaN("false")
console.log(isNaN);

isNaN(false)
console.log(isNaN);





console.log(!true);

console.log(!false);

console.log(!!true);

console.log(!!false);

console.log(!!0);

console.log(!!-0);

console.log(!!1);

console.log(!!-1);

console.log(!!0.1)

console.log(!!"hello");

console.log(!!"");

console.log(!!'');

console.log(!!"false");

console.log(!!"0");

var username = Codeup;
var password = 12345678;

console.log(password.length >= 5)
console.log(password.replace(username, ('' == password));
console.log(username.length === 6);


//EXERCISE 2 //

var sample = "Hello Codeup";

console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample + "students");
console.log(sample + "class");


//Exercise 3   Movies//

let littleMermaid = 3;
let brotherbear = 5;
let hercules = 1;
console.log(littleMermaid + brotherbear + hercules) * 3) ;


// Exercise 4 contracter//
let googleapp = 400;
let Amazonapp = 380;
let Facebookapp = 350;
console.log((Facebookapp * 10) + (googleapp * 6) + (Amazonapp * 4));



// Exercise 4 contracter//

var isNotFull = false;
var doesNotConflict = true;

console.log(isNotFull && doesNotConflict) {
    console.log("Welcome")
} else {
    console.log("You cant come in here")
}


// Exercise 5 Boolian//

const expiration = new Date( year: 2022, month: 9, date: 22)
const today = new Date();

let item = 5;

let premium = false;

offer() {
    if ((item >= 2 || premium === true) && today < expiration) {
        console.log("apply offer");
    } else {
        console.log("offer not applied");
    }
}


