//Changes the "demo paragraph in HTML file"
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

let x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 8;        // Statement 3
z = x + y;    // Statement 4

//Changes the "demo1 paragraph in HTML file"
document.getElementById("demo1").innerHTML = "The value of z is " + z + ".";

const car = {
    type:"Fiat", 
    model:"500",
    color:"white",
    year:2006, 
    fullName: function() {
        return this.type + " " + this.model;
    }
};

// shows car.fullName on demo2 paragraph
document.getElementById("demo2").innerHTML = car.fullName();


// Shows date @ demo3 by clicking button
function displayDate() {
    document.getElementById("demo3").innerHTML = Date();
}

// Changes text @ demo4 by clicking button
function changeText() {
    let text = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML =
    text.replace("Google","Duckduckgo");
}