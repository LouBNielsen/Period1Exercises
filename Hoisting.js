/*
Hosting

Implement at least two examples to illustrate that:
    - Function declarations are completely hoisted

    - var declarations are also hoisted, but not assignments made with them

What is hoisting?
    En variabel kan blive brugt, inden den er blevet declared.
    Normalt vil man declare variabler og funktioner i toppen af koden
    Hoisting: declarations puttes i hukommelsen under kompileringsfasen
*/
 
x = 5; //Assign 5 to x
elem = document.getElementById("demo"); //Find an element
elem.innerHTML = x; //Display x en the element

var x; //Declare x

//eller

catame("Mug");

function catName(name){
    console.log("My cat's name is " + name);
};

/*
A design rule we could follow, now we know about hoisting
*/