// 1) Using existing functions that takes a callback as an argument

let names = ["Caroline", "Fabian", "Karina", "Michael", "Lou"];

//using filter

let filteredNames = names.filter(function (name) {
    return name.length <= 3;
});

console.log("Opgave 1a: " + filteredNames);

//using map

let mappedNames = names.map(function (name) {
    return name.toUpperCase();
});

console.log("Opgave 1b: " + mappedNames);

// *************************************************************************************************************
// 2) Implement user defined functions that take callbacks as an argument
// Opgave 2a
function myFilter(array, callback) {
    let filteredArray = [];

    array.forEach(function (name) {
        let shouldInclude = callback(name);
        if (shouldInclude) {
            filteredArray.push(name);
        };
    });

    return filteredArray;
};

let filteredArray2 = myFilter(names, function (name) {
    return name.length <= 3;
});

console.log("Opgave 2a: " + filteredArray2);

// Opgave 2b
function myMap(array, callback) {
    let mappedArray = [];

    array.forEach(function (name) {
        mappedArray.push(callback(name));
    });
    return mappedArray;
};

let namesUpperCase = myMap(names, function (name) {
    return name.toUpperCase();
});

console.log("Opgave 2b: " + namesUpperCase);

// ****************************************************************************************************************
// 3) Using the Prototype property to add new functionality to existing objects
// Opgave 3a 

Array.prototype.myPrototypeFilter = function(callback){
    let arrayToReturn = [];
    for(let i = 0; i < this.length; i++){
        let shouldInclude = callback(this[i]);
        if(shouldInclude){
            arrayToReturn.push(this[i]);
        };
    };
    return arrayToReturn;
};


let filteredNames4 = names.myPrototypeFilter(function(name){
    return name.length <= 3;
})
console.log("Opgave 3a: " + filteredNames4);

//Opgave 3b

Array.prototype.myMap = function(callback){
    let arrayToReturn = [];
    for(let i = 0; i < this.length; i++){
        arrayToReturn.push(callback(this[i]));
    };
    return arrayToReturn;
};

let namesUpperCase2 = myMap(names, function (name) {
    return name.toUpperCase();
});

console.log("Opgave 3b: " + namesUpperCase2);

// *************************************************************************************************************
// 4) Getting really comfortable with filter and map
// Opgave 4a

let rows = names.map(function (name) {
    return "<li>" + name + "</li>"
});

console.log("Opgave 4a: " + rows);

// Opgave 4b

var names3 = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];

let row = names3.map(function (name) {
    return "<td>Name: " + name.name + "</td>" + "," + "<td> Phone: " + name.phone + "</td>"
});

let rowsStr = row.join(" <br> ");

console.log("Opgave 4b: " + rowsStr);

// Opgave 4c
console.log("Opgave 4c: Køres ved index.html");

// Opgave 4d
console.log("Opgave 4d: filter som upperCase og ikke <=3");
var filteredNames3 = names3.filter(function (name) {
    return name.length <= 3;
});
