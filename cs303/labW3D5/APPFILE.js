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



/* Write a program to compute student grades and the average score for the class.  Your program should have a quiz object that will contain properties of “students” and “key”.  The “students” property will be an array of student objects of the following form:
student10 = {sid: 10, answers: [{qid: 2, ans: “b”}, {qid: 3, ans: “a”}, {qid: 1, ans: “b”}] }
It has a property “sid” (student id) and another property “answers”.  The answer property holds an array that records the students answers for the quiz.  The array holds objects that have a question id (“qid”) property that uniquely identifies the question, and an “ans” property that holds the student’s answer.
The ”key” property of the quiz will hold an array with objects that give the correct answers.  
Create an object named quiz with the following methods
•	getAverage(), computes the average score over all students, 
•	scoreStudent(sid), computes the quiz score for this student
The answer arrays might not have the questions in the same order.  Write a function, answerComparator, that you can use to sort the answer arrays by the quiz id, “qid”.   You may assume that there will be answer objects for every question so that once they are sorted they arrays will have the student answers and the corresponding key answer in the same position of each array.  Score 1 point for each answer that matches the key.
*/

const quiz = {};
quiz.students = [
  {
    sid: 10,
    answers: [
      { qid: 2, ans: "b" },
      { qid: 3, ans: "a" },
      { qid: 1, ans: "b" },
    ],
  },
  {
    sid: 11,
    answers: [
      { qid: 1, ans: "e" },
      { qid: 2, ans: "a" },
      { qid: 3, ans: "b" },
    ],
  },
  {
    sid: 12,
    answers: [
      { qid: 3, ans: "b" },
      { qid: 2, ans: "a" },
      { qid: 1, ans: "d" },
    ],
  },
];
quiz.key = [
  { qid: 1, ans: "b" },
  { qid: 2, ans: "a" },
  { qid: 3, ans: "b" },
];

/**
 *
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object
 * @returns {number} difference of the identifiers
 */
function answerComparator(ans1, ans2) {
  return ans1.qid - ans2.qid;
}

/**
 *
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (id) {
  let stu = this.students.find((item) => item.sid === id);
  let stuAnswer = stu.answers.sort(answerComparator);
  let score = 0;
  for (let i = 0; i < stuAnswer.length; i++) {
     if (stuAnswer[i].ans === this.key[i].ans) score++;
  }
  return score;
};

/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function () {
  let totalScore=0;
  let totalStudent=Object.values(this.students).length
  for(let stu of this.students){
      totalScore+=this.scoreStudent(stu.sid)
  }
return (totalScore/totalStudent)
};




module.exports = {Teacher,quiz}; //