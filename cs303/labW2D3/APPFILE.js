"use strict";
/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { sumTo, factorial, fib,} //outputList, outputListLoop, list2Array, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests


//Recursion and stack 
//1  Sum all numbers till the given one
//Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n
//The solution using a loop:
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log( sumTo(100) );
  //The solution using recursion:
  function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
  console.log( sumTo(100) );

  //2 Calculate factorial
  /*
The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two",
 and so on till 1. The factorial of n is denoted as n
 //The task is to write a function factorial(n)
  that calculates n! using recursive calls.

  */
 function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(5) ); // 120

  //3Fibonacci numbers (the dynamic programming solution is optional)
  //Write a function fib(n) that returns the n-th Fibonacci number.
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
  console.log( fib(3) ); // 2
  console.log( fib(7) ); // 13
  
  