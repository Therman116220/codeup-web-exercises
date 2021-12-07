





//
// let dog = {
//     breed: "Pitbull",
//     color: ["brown", "white", "black"],
//     sex: "F",
//     name: "Aveline",
//     isFluffer: false,
//     bark: function (loud,) {
//         if (loud) {
//             console.log("WOOF WOOF!!");
//         } else {
//             console.log("woof ");
//         }
//     },
//     getDetails: function () {
//         return this.color[0] + " " + this.breed + " named " + this.name;
//     }
// }
// console.log(dog);
//

var human = {

    name: "Rick",
    age: 65,

    eat: function () {
        console.log("Rick is eating food")
    },
    drink: function () {
        console.log("Rick is drinking a brewski *burp*")
    },
    sleep: function () {
        console.log("Rick is passed out");
    }
};
human.name    //dot notation
human["name"] //bracket notation
console.log(human);
console.log(human.age);
human.eat();
human.drink();
human.sleep();
human.eat()


var human2;
human2 = {

    name: "Morty",
    age: 14,

    eat: function () {
        console.log("Morty is snacking")
    },
    drink: function () {
        console.log("Morty is drinking water")
    },
    sleep: function () {
        console.log("Morty is sleep");
    }
};

console.log(human.drink());

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        lastName: "Haynes",
        firstName: "Therman",
    }
    console.log(person.lastName);
    console.log(person.firstName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
 person.sayHello = function () {
  return ("Hello" + person.firstName + person.lastName)
 }
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];
 shoppers.forEach(function (shopper ) {
    if (shopper.amount > 200) {
        console.log("Congrats on the discount" + shopper.name);
        console.log(shopper.amount + "-.12")
        console.log(shopper.amount - (shopper.amount * .12));
    } else {
        console.log("No discount for" + shopper.name)
    }
    }

)
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
let  Books = [

        {book1: "To kill a mockingbird",  Author:{lastName:"Unknown" , firstName:"Unknown" }},
        {book2: "Unwind",                 Author:{lastName:"Unknown" , firstName:"Unknown" }},
        {book3: "Brave New World",        Author:{lastName:"Unknown" , firstName:"Unknown" }},
        {book4: "Unwind",                 Author:{lastName:"Unknown" , firstName:"Unknown" }},
        {book5: "Brave New World",        Author:{lastName:"Unknown" , firstName:"Unknown" }}
    ]
 console.log(Books);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
  Books.forEach(function(book,index) {
      console.log(book1.Author)
      console.log(book2.Author)
      console.log(book3.Author)
  })


  /*  let books = [];
    books.push(book1("Unknown", "Doug Adams"));
    books.push(book2("Unknown", "Carrie Vaughn"))
    books.push(book3("", "Ann McCaffery"));
    books.push(book4("Kitty goes to Washington", "Carrie Vaughn"));
    books.push(book5("How to Train Beagles", "Kathleen Weaver"));
*/
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();