

let x = 0
do{
   x = number(x = prompt("Pick a odd number between 1 and 50"))
if (x < 1 || x >59) {
    alert("number out of bounds")
}else if ("number is not odd") {
} else if (isNan(x)) {
alert("Thats not a number")
} else {
    alert("You got it")
    break;
}


} while (true);njnb




console.log("Number to skip is: " + x)
for (var i = 1; i <= 50; i+=2) {
    if (i === x) {
        console.log)"Yikes… skipping number: " + x)
        continue;
    }
console.log("heres a odd number: " + i)