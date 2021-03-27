
//1 Copy and sort array,
let arr = ["HTML", "JavaScript", "CSS"];
//let sorted = copySorted(arr);
function copySorted(arr) {
    return arr.slice().sort();
  }
  console.log( copySorted(arr) );
console.log( arr );


//2 Sort users by age,
//Write the function sortByAge(users) that gets an array of 
//objects with the age property and sorts them by age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
    return arr
  }

  console.log(sortByAge(arr));
  
 //3 Shuffle an array,
 //Write the function shuffle(array) 
 //that shuffles (randomly reorders) elements of the array


 let arr = [1, 2, 3];
 function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }


console.log(shuffle(arr));






 //4Get average age
 //Write the function getAverageAge(users) that gets an array of 
 //objects with property age and returns the average age.
 let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  console.log(getAverageAge(arr));
  