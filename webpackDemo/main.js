require('./main.css');

const name = 'Scotch.io';

setTimeout(() => alert(`Hello there from ${name}`), 300);



const persons = [
  new Person("Kurt", "Wonnegut","Socker"),
  new Person("Jan", "Peterson","Hockey"),
  new Person("Jane", "Peterson","Skating"),
  new Person("John", "Hansen","Socker"),
];

function Person(fn,ln,s){
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
};

const table = makeTable(persons);
document.getElementById('my-table').innerHTML = table;