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



