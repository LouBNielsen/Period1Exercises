/*
this in JavaScript


Implement at least three examples to illustrate how this in JavaScript differs from what we know from Java. 
using either 
    - call()

*/
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}
// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};
// Rectangle - subclass
function Rectangle(width,height) {
  Shape.call(this); // call super constructor.
  this.width = width;
  this.height = height;
/*
    - apply()
*/
Function.prototype.construct = function(aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};

function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'

/*
    - bind()
*/
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(null, 37);

/*
Explain, using the examples:

    - How this in JavaScript differ from this in Java

In JavaSctipt, in the global execution context (outside of any function), this refers to the global object

In java, within an instance method or a constructor, 
this is a reference to the current object — the object whose method or constructor is being called.

To pass the value of 'this' from one context to another, use call, or apply:
*/

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

/* 
    - Why we followed a pattern in our third semester controller and stored a reference to this (var self = this)

'self' is being used to maintain a reference to the original 'this' even as the context is changing.

    - The purpose of the methods call(), apply() and bind()

The Apply and Call methods are two of the most often used Function methods in JavaScript, and for good reason: 
they allow us to borrow functions and set the this value in function invocation. 
In addition, the apply function in particular allows us to execute a function with an array of parameters, 
such that each parameter is passed to the function individually when the function executes

We use the Bind () method primarily to call a function with the this value set explicitly. It other words, 
bind () allows us to easily set which specific object will be bound to this when a function or method is invoked.

*/