//1 Make a prompt and ask for a name
//2 save that name to a span
//3 input the name saved into the span
//3a

var promptAnswer = prompt("What is your name?");
var retrievedSpan = document.getElementById("name")



console.log("promptAnswer: ", promptAnswer);
console.log("retrievedSpan: ", retrievedSpan);
//document --> the name of the DOM object

    //Methods that retrieve objects from DOM
// getElementById()  --> by id --> WIll (and should) only return ONE ELEMENT
//getElementByClass()  -- by class --> COULD RETURN MORE THAN ONE ELEMENT
//getElementByTagNAme() -- bytag --> could return many Elements with same class name
retrievedSpan.innerHTML = promptAnswer;
/*retrievedSpan.textContent = "millionaire";*/
