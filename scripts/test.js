let str = "Apple, Banana, Kiwi"; // Variables for str.
document.getElementById("demo").innerHTML = str.slice(7); 
// slice() extracts a part of a string and returns the extracted part in a new string.

document.getElementById("demo1").innerHTML = str.substring(7, 13); 
// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

document.getElementById("demo2").innerHTML = str.substr(7, 6);
//  substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

function myFunction() {
    let text = document.getElementById("button1").innerHTML;
    document.getElementById("button1").innerHTML =
    text.replace("Translate", "Vertaal");
}

let text = "HELLO WORLD"; // Variables for text.
document.getElementById("demo3").innerHTML = text.charAt(4); // The charAt() method returns the character at a specified index (position) in a string.
document.getElementById("demo4").innerHTML = text.charCodeAt(0); //The charCodeAt() method returns the unicode of the character at a specified index in a string.
document.getElementById("demo5").innerHTML = text[2];

let str1 = "please locate where 'locate' occurs!";
document.getElementById("demo6").innerHTML = str1.indexOf("locate");
document.getElementById("demo7").innerHTML = str1.lastIndexOf("locate");
document.getElementById("demo8").innerHTML = str1.indexOf("locate", 15);

let text1 = "the rain in SPAIN stays mainly in the plain";
document.getElementById("demo9").innerHTML = text1.match(/ain/gi);

document.getElementById("demo10").innerHTML = text;
document.getElementById("demo11").innerHTML = text.includes("WORLD");

// string.includes(searchvalue, start)

document.getElementById("demo12").innerHTML = text1.startsWith("rain");
document.getElementById("demo13").innerHTML = text1.endsWith("plain");

let x = 10;
let y = 20;
let z = x + y;
document.getElementById("demo14").innerHTML = z; // returns as a number

let a = "10";
let b = "20";
let c = a + b;
document.getElementById("demo15").innerHTML = c; // returns as a string




