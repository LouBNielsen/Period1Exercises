// EX1
console.log("EX1: man kan ikke rette på variabler med const");
// Constants
const PI = 3.141593; //man kan ikke rette på denne variabel
PI > 3.0;

// Block Scoped variabels and therefor without hoisting - En variabel kan blive brugt, inden den er blevet declared.
// Ved brug af 'let' er variablen kun kendt af dets scope
let a = [1, 2, 3]
for (let i = 0; i < a.length; i++) {
    let x = a[i];
}
// Ved brug af 'var' er variablen global.
for (var i = 0; i < a.length; i++) {
    var x = a[i];
}

// Bocked-Scoped Functions
// Kun funktion 1 kan læse funktion 2. andre funktioner kan ikke læse funtktion 2. 
{
    function foo() {
        return 1;
    }
    foo() === 1; {
        function foo() {
            return 2;
        }
        foo() === 2;
    }
    foo() === 1;
}

// EX2
// Arrow Functions
//a1
let evens = [1, 2, 3];
odds = evens.map(v => v + 1)
//odds = evens.map(v => { v + 1 }) // virker ikke fordi der ikke står return inden i - ellers returnerer den undefined
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums = evens.map((v, i) => v + i)
console.log("EX2: " + odds);

// EX3
// A
function Numbers(numbs) {

    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    });
}
var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log("EX3: " + numbers.fives);

// OVERSTÅEND VIRKER IKKE - undefined, funktionen inden i får sit eget this, RETTELSE SES HERUNDER
function Numbers(numbs) {
    var self = this;
    self.nums = numbs;
    self.fives = [];
    self.nums.forEach(function (v) {
        if (v % 5 === 0) {
            self.fives.push(v);
        }
    });
}

// ARROW Function

function Numbers(numbs) {
    var self = this;
    self.nums = numbs;
    self.fives = [];
    self.nums.forEach((v) => {
        if (v % 5 === 0) {
            self.fives.push(v);
        }
    });
}

// B
var counter = {
    count: 0,
    inc: (() => {
        this.count++;
    })
}

var func = counter.inc; //Store "reference" to inc
func();
console.log("EX3b: " + counter.count + ". Koden kommer aldrig til at virke. (mangel i ES6)"); //Still zero
counter.inc();
//console.log(counter.count); //Now one, virker stadig ikke

//Arrow funktioner løser ikke 'this' problemet.

// EX4
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;
console.log("EX4: " + message);

//EX5
console.log("EX5 A:");
function f(x, y, ...rest) {
    let sum = x + y;
    console.log("Sum: " + sum);

    for (let i = 0; i < rest.length; i++) {
        console.log("rest value " + i + " is a: " + rest[i].constructor.name);
    }
}

f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {});

var rest = [true,false,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
f(5,8,...restParams)
console.log("EX5 B: hvis man laver console.log på f(5,8,...restParams) giver det undefined");

// EX6
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

person = {fName, lName, age};
console.log("EX6: " + person.fName)

// EX7
let fname = "Kurt", lname = "Wonnegut";

var list = [ fname, lname ];
[ lname, fname ] = [ fname, lname ];

console.log("EX7 A: " + `First: ${fname}, Last: ${lname}`);

//EX 7 B
function getPerson(){
  return {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender : "Male",
    email: "kurt@wonnegut.dk",
    phone: "12345",
  }
}   

var { firstName, lastName } = getPerson();
console.log("EX8: " + firstName + " " + lastName)


