"use strict";
 /*global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/



//Section: Native prototypes
//Add method f.defer(ms) to functions

/*
Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.

After you do it, such code should work:
*/
/*
function f() {
    console.log("Hello!");
  }
  
  f.defer(1000); // shows "Hello!" after 1 second

  Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    console.log("Hello!");
  }
  
  f.defer(1000); // shows "Hello!" after 1 sec
  */

  //2 Add the decorating “defer()” to functions
  /*
  Add to the prototype of all functions the method defer(ms), that returns a wrapper, delaying the call by ms milliseconds.

Here’s an example of how it should work:
*/
/*
function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1, 2); // shows 3 after 1 second

  Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  // check it
  function f(a, b) {
    alert( a + b );
  }
  
  f.defer(1000)(1, 2); // shows 3 after 1 sec

  /*
  Please note: we use this in f.apply to make our decoration work for object methods.

So if the wrapper function is called as an object method, then this is passed to the original method f.
*/
/*
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  let user = {
    name: "John",
    sayHi() {
      console.log(this.name);
    }
  }
  
  user.sayHi = user.sayHi.defer(1000);
  
  user.sayHi();


  //Section: Prototype methods, objects without __proto__


  //The difference between calls
  //Let’s create a new rabbit object:

  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  //let rabbit = new Rabbit("Rabbit");
  //These calls do the same thing or not?
  rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
/*
The first call has this == rabbit, the other ones have this equal to Rabbit.prototype, because it’s actually the object before the dot.

So only the first call shows Rabbit, other ones show undefined:
*/
/*
function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log( this.name );
  }
  
  let rabbit = new Rabbit("Rabbit");
  
  rabbit.sayHi();                        // Rabbit
  Rabbit.prototype.sayHi();              // undefined
  Object.getPrototypeOf(rabbit).sayHi(); // undefined
  rabbit.__proto__.sayHi();              // undefined

  /*
  Create an object called Teacher derived from the Person class, and implement a method called teach
which receives a string called subject, and returns a string:
[teacher's name] is now teaching [subject]
*/
let Person = function() {}; 
 
Person.prototype.initialize = function(name, age) 
{ 
    this.name = name; 
    this.age = age; 
}; 
 
Person.prototype.describe = function() 
{ 
    return this.name + ", " + this.age + " years old."; 
}; 
let Teacher  = function() {}; 
Teacher.prototype = new Person();

Teacher.prototype.teach=function(subject) 
{ 
    return (this.name + " is now teaching " + subject); 
}; 

let teacher = new Teacher ();
teacher.initialize("Dr Levi",60);
teacher.teach("JavaScript");


//module.exports = {Teacher }; //