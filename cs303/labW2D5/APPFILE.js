"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests

/*
//Section: Closure
//1 Does a function pickup latest changes?
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?
 //the answer is "pete"
 /*
A function gets outer variables as they are now, it uses the most recent values.

Old variable values are not saved anywhere.
 When a function wants a variable, 
 it takes the current value from its own Lexical Environment or the outer one.

 */
//2 Which variables are available?
/*
function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show?
  //Which value it will show? “Pete” or “John”?

  /*

  The answer is: Pete.

The work() function in the code below gets name from
 the place of its origin through the outer lexical environment reference:
 So, the result is "Pete" here.

But if there were no let name in makeWorker(), 
then the search would go outside and take the global variable
 as we can see from the chain above. In that case the result would be "John".
 */

 //3 Are counters independent?
 /*
Here we make two counters: counter and counter2 using the same makeCounter function.

Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?
*/
/*
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // ?
  console.log( counter2() ); // ?
 // The answer: 0,1.
/*
Functions counter and counter2 are created by different invocations of makeCounter.

So they have independent outer Lexical Environments, each one has its own count
*/

//4Counter object
/*
Here a counter object is made with the help of the constructor function.

Will it work? What will it show?
*/
/*
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  console.log( counter.up() ); // ?
  console.log( counter.up() ); // ?
  console.log( counter.down() ); // ?

  /*  yes it works
  Both nested functions are created within the 
  
  same outer Lexical Environment, so they share access 
  to the same count variable:
  */
 // 5 Function in if
 //Look at the code. What will be the result 
 //of the call at the last line?
 /*
 let phrase = "Hello";


if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
/* it will give error
The function sayHi is declared inside the if, 
so it only lives inside it. There is no sayHi outside.
*/
//6 Sum with closures
/*
Write function sum that works like this: sum(a)(b) = a+b.

Yes, exactly this way, using double parentheses (not a mistype).

For instance:
*/
/*
sum(1)(2) = 3
sum(5)(-1) = 4

function sum(a) {

    return function(b) {
      return a + b; // takes "a" from the outer lexical environment
    };
  
  }
  
  console.log( sum(1)(2) ); // 3
  console.log( sum(5)(-1) ); // 4
  
  // 7 Is variable visible?
  //What will be the result of this code?


  let x = 1;

  function func() {
    console.log(x); // ?
  
    let x = 2;
  }
  
  func();
  // the variable x is not visble as the function trying to print
  // x befor the assignmernt of x=2

  //8 Filter through function
  /*
  We have a built-in method arr.filter(f) for arrays. 
  It filters all elements through the function f. If it returns true,
   then that element is returned in the resulting array.

Make a set of “ready to use” filters:

inBetween(a, b) – between a and b or equal to them (inclusively).
inArray([...]) – in the given array.
The usage must be like this:

arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
arr.filter(inArray([1,2,3])) – selects only elements matching 
with one of the members of [1,2,3].
*/
/* .. your code for inBetween and inArray */
/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

/**
 * @param {number} a is smallest number to include
 * @param {number} b is largest number to include
 * @returns {Function} a function that  will be called by Array.filter with a number argument
 *   and then will return true if the number is in the range
 */
function inBetween(a, b){
    /**
     * @param {number} number is what filter will give us
     * @return {Function} true if the number is in the range
     */
      function inner(number){
        if (a <= number && number <= b){
            return true;
        } else {
            return false;
        }
    };
    return inner;

}
//let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
  //let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

  //9 Sort by field
  //We’ve got an array of objects to sort:
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  //The usual way to do that would be:
// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1)
//Can we make it even less verbose, like this?
users.sort(byField('name'));
users.sort(byField('age'));

function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }

  //10 Army of functions
/*
The following code creates an array of shooters.

Every function is meant to output its number.
 But something is wrong…
 *//*
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() { // create a shooter function,
        console.log( i ); // that should show its number
      };
      shooters.push(shooter); // and add it to the array
      i++;
    }
  
    // ...and return the array of shooters
    return shooters;
  }
  
  let army = makeArmy();
  
  // all shooters show 10 instead of their numbers 0, 1, 2, 3...
  army[0](); // 10 from the shooter number 0
  army[1](); // 10 from the shooter number 1
  army[2](); // 10 ...and so on.
//Why do all of the shooters show the same value?

//Fix the code so that they work as intended.

*/

function makeArmy() {

    let shooters = [];
    for(let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log("I am shooter ", i);
            return i;
            };
      shooters.push(shooter);
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // 0
  army[5](); // 5