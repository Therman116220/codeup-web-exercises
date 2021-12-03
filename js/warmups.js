/*

const animals = ['cat', 'dog', 'horse', 'sheep', 'bird'];

animals.forEach(animal => {
    console.log(animal);
});


for (let i = 0; i>20; i++) {
    console.log("Loop" + i);
    i++
}

let x = 0;
while(x <= 15) {
    console.log("Keep looping over:" + x);
    x++

}
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



/*


    let x = 12345678
let y = prompt("Password?");
do{
    console.log("Good Pass")
} while (x === y);

*/
/*
function showMultipliationTable(arg) {
for (let i = 1; i < 10; i++) {
console.log(arg * i);
}
}
showMultipliationTable(7)    */

/*
for (var parkingLoops = 0, usedSpots = 9; parkingLoops < 10; parkingLoops++, usedSpots--) {
    console.log('You looped ' + parkingLoops + ' times', 'There are ' + usedSpots + ' Used Spots left');
if (usedSpots <= 10) {
    console.log("You have " + parkingLoops + " parking spots available: ")
}

}
*/

////Display num 1 - 5
/*
let i = 1, x = 5;
while (i <= x) {
    console.log(i);
    i += 1;
}

*/
/*
let x = 0
let y = 10
while (x < y; x++)
{
    console.log(i);
}
*/



    let foodThatMakesMeHungry = ["wing", "shrimp", "pizza", "barria tacos", "chilidogs", "nachos"]
/*
console.log(foodThatMakesMeHungry.sort)
console.log(foodThatMakesMeHungry[1])
console.log(foodThatMakesMeHungry.reverse)
console.log(foodThatMakesMeHungry.slice)
console.log(foodThatMakesMeHungry.lastIndexOf(1))
console.log(foodThatMakesMeHungry[0]
console.log(foodThatMakesMeHungry.push))
console.log(foodThatMakesMeHungry[4]);
console.log(foodThatMakesMeHungry[0] + ": 1")
console.log(foodThatMakesMeHungry[1] + ": 2")
console.log(foodThatMakesMeHungry[3] + ": 3")
console.log(foodThatMakesMeHungry.lastIndexOf("wing"));/// lastIdex reads right to left
console.log(foodThatMakesMeHungry.lastIndexOf("pizza"));
let choice = foodThatMakesMeHungry[0];
console.log(choice + "stop")  ///nested array inside let

//Example
let Therman = ['Therman', 24, 'San Antonio', ['Wings', 'pizza'], 2021]

    let name = Therman[0];
console.log(name)
    let age = Therman[1];
function desiredAge(num) {
    return num - age;
}
console.log(desiredAge(48))


*/
//let masterFolder = [fileBox, fileBoxTwo];

let folderOne = "file1";
let folderTwo = "file2";
let folderThree = "file3";
let folderFour = "file4";


let fileBox = [folderOne, folderTwo, folderThree, folderFour]
console.log(fileBox[0])

let folderFive = "file5";
let folderSix = "file6";
let folderSeven = "file7";
let folderEight = "file8";

let fileBoxTwo = [folderFive, folderSix, folderSeven, folderEight]
console.log(fileBoxTwo[0])

//console.log(masterFolder[0])

function nestingFunction(num, randomFunction) {
    randomFunction();
    return num1;
}
console.log(nestingFunction(4, function (){
    console.log("Hi there from the nested function")
}))
nestingFunction(1)