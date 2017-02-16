/*
Immediately Invoked Function Expressions

    - Implement 1-2 examples to illustrate IIFE's purpose.
*/
(function(){
    console.log("Hi")
 })();

// eller

(function(){
  var txt = "Hello World";
  console.log(txt);  //OK
})();

console.log(txt);  //Throws an error

/*
    - Explain, using the examples:
    The purpose of Self Invoking Functions (just another name for the same thing)

IFE's or Self Invoking Functions is a pattern to make a function invoke itself
IIFE's can be used to avoid variable hoisting from within blocks

A common way to implement IIFE's is to enclose both the function expression and invocation in parentheses
*/
 