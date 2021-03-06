
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */


    let nameList = ["Casey", "Laura", "Fernando", "George"];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(nameList.length);



    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(nameList[0]);
    console.log(nameList[1]);
    console.log(nameList[3]);

    console.log("");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let x = 0; x < nameList.length; x++) {
        console.log(nameList[x]);
    }

    console.log("");

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    nameList.forEach(function(arg) {
        console.log(arg);
    });

    console.log("");
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function firstFun(array) {
        return array[0];
    }

    function secondFun(array) {
        return array[1];
    }

    function thirdFun(array) {
        return array[array.length -1 ];
    }

    console.log(firstFun([1, 2, 3 ,4 ,5]));
    console.log(secondFun([1, 2, 3 ,4 ,5]));
    console.log(thirdFun([1, 2, 3 ,4 ,5]));

