/*
Reusable Modules with Closures

1) 
Implement and test the Closure Counter Example from the Slides
*/
var counter = {
    count: 0,
    inc: function () {
        this.count++;
    }
}
var func = counter.inc; //Store "reference" to inc
func(); //nu skal man bare kalde func(), hvis man vil hive fat i inc funktionen
counter.count  // does not work, func() peger nu ikke længere på 'this'

/*

2)
Implement a reusable function using the Module pattern that should encapsulate information about a person
(name and age) and returns an object with the following methods:
- setAge
- setName
- getInfo (should return a string like Peter, 45)

*/