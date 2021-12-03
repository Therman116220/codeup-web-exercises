
/* const animals = ['cat', 'dog', 'horse', 'sheep', 'bird'];
//
// animals.forEach(animal => {
//     console.log(animal);
// });
//
//
// for (let i = 0; i>20; i++) {
//     console.log("Loop" + i);
//     i++
// }
//
// let x = 0;
// while(x <= 15){
//     console.log("Keep looping over:" + x);
// x++
*/




    //While vs do while
// Do while loop executes before checking condition
/* let i = i++;
do {
 console.log("i before i++: ", i)
    i++;
 console.log(("i after ++i: ", i);
} while (i <= 15);

let x = 1;
do {
console.log("Number is" + x)
    v=v+2;
}
*/
/*
    function getRandomNumber(upper) {
        return Math.floor(Math.random() * upper) + 1;
    }
    let counter = 0;
    while (counter < 100) {
        console.log("Loops: " + counter)
        counter +=  1;
    }}
*/
/*
let x = 12345678
let y = prompt("Password?");
do{
console.log("Good Pass")
} while (x === y);

*/
/*
    for(let counter = 1; counter <=5; counter++){
console.log("first : " + counter);

for(let counterTwo = 5; counterTwo > 0; counterTwo--){
console.log("second:" + counterTwo--)
}
}
}

*/
/*
/// 2
    function showMultiplicationTable(number) {
        for(let i = 0; i <= 10; i++) {
            console.log(number + " x " + i + " = " + number*i)
        }
    }

    showMultiplicationTable(7)
*/
/*
//// 3
for (let i = 1; i <= 10; i++) {
    let numbers = Math.floor(Math.random() * 181) + 20;
    if (numbers % 2 === 0) {
        console.log( numbers + " is even")
    } else {
        console.log(numbers +" Is Odd")
    }
}
*/

//Problem 4//

/*
function generatePyramid() {
    let totalNumberOfRows = 9;
    let output = '';
    for (let i = 1; i<= 9; i++) {
         output += i
    }
}
generatePyramid();

*/

//5
for (var i = 100; i>= 5; i++) {
    console.log(i.toString().repeat(i));
}
