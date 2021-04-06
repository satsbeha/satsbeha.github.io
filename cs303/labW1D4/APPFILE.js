

const prompt = require("prompt-sync")();

//Section: Numbers

//1 Sum numbers from the visitor
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
// the plus sign converts to number, it will work as parsefloat

console.log( a + b );


//2 Repeat until the input is a number
function readNumber() {  //Repeat until the input is a number
      
      let num;
      do {
         const input = prompt("Enter a number please?", 0);
         num = parseFloat(input);
      } while ( isNaN(num) );
      return num;
    }
    
    console.log(readNumber())
    
   
   //3 An occasional infinite loop
   let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
}
//i can allways be <11, that will be infinite loop

//4 A random number from min to max

function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  console.log( random(1, 5) );
  console.log( random(1, 5) );
  console.log( random(1, 5) );
  
  // the number will allways be between minimum number and
  // maximum number randdom
    
   
   //5 A random integer from min to max
   function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  console,log( randomInteger(1, 3) );

  //adjust interval borders. To ensure the same intervals,
  // we can generate values from 0.5 to 3.5, thus adding the required
  // probabilities to the edges:
  

  //Section: Strings (use the Mocha tests in stringTests.js to test your
  // implementations in VSCode)

  //1 Uppercase the first character
  
  let str = "love is blind"
let newStr = str[0].toUpperCase() + str.slice(1);

console.log(newStr);


//2 Check for spam
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// we first have to change the given dtring to lower case,or upper case
//and check for the the prsence of any string or lettr in it

//3 Truncate the text
/*
checks the length of the str and, if it exceeds maxlength –
 replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
example 
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
it will give us the string up to the max length given and fil the rest with ellipsis character "…"
*/

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
let string = "love is allways what we need"
console.log(truncate(string, 10)) //love is a…


//4 Extract the money
function extractCurrencyValue(str) {
    return +str.slice(1);
  }
  

 ///Section : Arrays
 //1  Is array copied?
 let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log( fruits.length ); // ?
//The result is 4:

//2 Array operations
/*
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae")

//3 Calling in an array context

//What is the result? Why?
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2](); // ?
/*
The call arr[2]() is syntactically the good old obj[method](),

the role of obj we have arr, and in the role of method we have 2.

So we have a call of the function arr[2] as an object method.
 Naturally, it receives this referencing the object arr and outputs the array:
 */
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2](); // a,b,function(){...}
//The array has 3 values: initially it had two, plus the function.

//Sum input numbers
/*
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/
/*
Please note the subtle, but important detail of the solution.

We don’t convert value to number instantly after prompt,
 because after value = +value we would not be able to tell
  an empty string (stop sign) from the zero (valid number). We do it later instead
  */
function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log( sumInput() );

//A maximal subarray
/*
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0
Please try to think of a fast solution: O(n2) or even O(n) if you can
*/
/*
Let’s walk the array and keep the current partial sum of elements in the variable s. If s becomes negative at some point, then assign s=0. The maximum of all such s will be the answer.

If the description is too vague, please see the code, it’s short enough
*/
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([-1, -2, -3]) ); // 0

//Section: Array methods
//Translate border-left-width to borderLeftWidth
/*
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition'
*/
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
