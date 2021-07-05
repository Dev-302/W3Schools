// An array is a special variable, which can hold more than one value at a time. 
// If you have a list of items (a list of car names for example), stroring the cars in single variables could look like this:
// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";

// However, what is you want to look through the cars and find a specific one? And what if you had nog 3 cars, but 300?
// The sollution is an array!
// An array can hold many values under a single name, and you can acess the values by referring to an index number (index numbers start with 0)

// Spaces and line breaks are not important. A declaration can span multiple lines
// const cars = [
    //     "Saab";
    //     "Volvo";
    //     "BMW";
    // ];
    
    // You can also create an array, and then provide the elements:
    // const cars = [];
    // cars[0] = "Saab";
    // cars[1] = "Volvo";
    // cars[2] = "BMW";
    
    // // You can acces an array element by referring to the "Index number"
    // let x = cars[0]; // x = "Saab"
    // console.log(x);
    
    // const array_name = [item1, item2, ...]
// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Opel";
// // console.log(cars[0]); // Shows "Opel"
// document.getElementById("demo").innerHTML = cars;

// const person = [
//     "John",
//     "Doe",
//     46
// ];
// document.getElementById("demo1").innerHTML = person[0];

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 46
// };

// myArray[0] = date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

// cars.length // returns the number of elements
// cars.sort() // sorts the array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length -1]);

