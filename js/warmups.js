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


for (var parkingLoops = 0, usedSpots = 9; parkingLoops < 10; parkingLoops++, usedSpots--) {
    console.log('You looped ' + parkingLoops + ' times', 'There are ' + usedSpots + ' Used Spots left');
if (usedSpots <= 10) {
    console.log("You have " + parkingLoops + " parking spots available: ")
}

}
