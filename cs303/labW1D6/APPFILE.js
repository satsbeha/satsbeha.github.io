"use strict";
module.exports = { topSalary };
//Destructuring assignment

/**
 *assign viarable to the property of the object.
 * @param  {object} user object
 * @returns {string} returns varibales
 * 
 */
//We have an object:

let user = {
  name: "John",
  years: 30
};
/*
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin
 (false, if no such property)
 */


  
  let {name, years: age, isAdmin = false} = user;
  
  console.log( name ); // John
  console.log( age ); // 30
  console.log( isAdmin ); // false

  // 2 The maximal salary


  /**
 *finds the name of the top-paid person.
 * @param  {number} salaries salaries of individual
 * @returns {string} returns the name of the top-paid person.
 * 
 */

function topSalary(salaries) {

    let max = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log(topSalary(salaries));
  

  //Section: Dates

  //1 Create a date

  //Create new date
/* The new Date constructor uses the local time zone. So the only important thing to 
 * remember is that months start from zero.So February has number 1.
 */
 
let mydate = new Date(2012, 1, 20, 3, 12);
console.log( mydate );



/** The method date.getDay() returns the number of the weekday, starting from sunday.
 *  Let’s make an array of weekdays, so that we can get the proper day name by its number
 * @param  {date} date input date
 * @return {string} return proper day name
 */
function getWeekDay(date) {
    let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 3 Jan 2014
  console.log( getWeekDay(date) ); // FR


  /**European countries have days of week starting with Monday (number 1), then Tuesday (number 2) 
   * and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day 
   * of week for date.
   * @param  {date} date european date
   * @returns {string} returns the “European” day of week for date.
   */
  function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
  }
    date = new Date(2012, 0, 3);  // 3 Jan 2012
    console.log( getLocalDay(date) );       // tuesday, should show 2


  /**Which day of month was many days ago?
   * 
   * @param  {date} date  date
   * @param  {number} days given number of days
   * @returns {number} return the day of month days ago from the date
   */
  function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }

console.log( getDateAgo(date, 1) ); 
console.log( getDateAgo(date, 2) ); 
console.log( getDateAgo(date, 365) ); 


/**How many seconds has passed today?
 * @returns {number} eturns the number of seconds from the beginning of today.
 * 
 */
function getSecondsToday() {
    let now = new Date();
  
    // create an object using the current day/month/year
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; // ms difference
    return Math.round(diff / 1000); // make seconds
  }
  
  console.log( getSecondsToday() );



  //map :
  const numArray = [5,0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}]

/*
function toDouble(Array) {
  return Array.map(function(val) {
    return   val * 2;
  })
}
console.log(toDouble(numArray));

function Double(obj) {
  return obj.map(function(val) {
    return   val.age * 2;
  })
}
console.log(Double(peopleArray));
*/
/*
//filter:
 function fil(arr){
   return arr.filter(function(val){
     return val%2===0
   })
 }
 console.log(fil(numArray));

 function fil1(obj){
   return obj.filter(function(val){
     return val.age>10;
   })
 }
 console.log(fil1(peopleArray));
*/
 //- find even, include even
 /*
  function fi(arr){
    return arr.find(function(val){
      return val%2==0;
    })
  }
  console.log(fi(numArray));
  */
 /*

  let n=numArray.includes(function(val)
    {return val%2===0
    });
  console.log(n)
  */
 

  
