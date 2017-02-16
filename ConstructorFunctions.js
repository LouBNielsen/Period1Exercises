/*
Constructor function

When a function is invokeded via the new operator, it becomes a Constructor function

By convention Constructor Functions always start with a capital letter

Notice the use of this to assign values to the object's properties based on the values passed to the function.
*/

//The Constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
//Creating instances
var car1 = new Car("Volvo", "V70", 2005);
var car1 = new Car("Volvo", "244", 1988);

// forkert
function Car(make,model) {
  this.make = make;
  this.model = model;
}
var car = Car("Volvo","V70"); //Forgot new
//man kan godt console.log(make eller model), idet det er globalt, fordi man ikke har brugt var/let på make og model

