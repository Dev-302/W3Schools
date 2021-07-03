// var carName = "Volvo";
// var carName = "Porsche";
// var carName = "Lamborginhi";
// var carName = "Maserati";
// var carName = "Mercedes";
// var carName = "BMW";
// var carName = "Volkswagen";


// //One of many JavaScript HTML methods is "getElementByID()".
// // The example below 'finds' an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript"
// document.getElementById("demo").innerHTML = "Hello JavaScript";

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("demo").innerHTML = text.length;//will return 26

// //You can add quotes within the same "" by using \"QUOTES\"

// let length = 16;                              // Number
// let lastName = "Johnson";                     // String
// let x = {fistName: "John", lastName:"Doe"};   // Object

// let x;      // Now x is undefined
// x = 5;      // Now x is a number
// x = "John"; // Now x is a String

// let x = 5;
// let y = 5;
// let z = 6;
// (x == y) // Returns true
// (x == z) // Returns false

// const cars = ["Saab", "Volvo", 'BMW'];

// const person = {
//     firstName:"John", 
//     lastName:"Doe", 
//     age:50, 
//     eyeColor:"blue"
// };

// console.log(person.lastName) // This shows the lastName

// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
// }

// let x = myFunction(4, 3); // Function is called, return value will end up in x

// function myFunction(a, b) {
//     return a * b;         // Function returns the product of a and b
// }

// // Local variables 

// // code here can NOT use carName

// function myFunction() {
//     let carName = "Volvo";
//     // code here CAN use carName
// }

// // code here can NOT use carName

// const car = {
//     type:"Fiat", 
//     model:"500",
//     color:"white",
//     year:2006, 
//     fullName: function() {
//         return this.type + " " + this.model;
//     }
// };

// document.getElementById("demo2").innerHTML = car.fullName();

// console.log(car)
// console.log(car["model"])

// // When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

// x = new String();   // Declares x as a String object
// y = new Number();   // Declares y as a Number object
// z = new Boolean();  // Declares z as a Boolean object

// Avoid string, number & boolean objects. They complicate your code and slow down execution speed

let text1 = "Hello World!";         // String
let text2 = text1.toUpperCase();    // text2 is text1 converted to upper

let text3 = "Hello World!";         // String
let text4 = text3.toLowerCase();    // text4 is text3 converted to lower

//The concat() Method. concat() joins 2 or more strings

let text5 = "Hello";
let text6 = "World!";
let text7 = text5.concat(" ", text6);

console.log(text2)
console.log(text4)
console.log(text7)

text.split(",") // Split on commas
text.split(" ") // Split on spaces
text.split("|") // Split on pipe
text.split("") // Split in characters

