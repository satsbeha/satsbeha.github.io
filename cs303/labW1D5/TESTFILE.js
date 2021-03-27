"use strict";
/* global assert copy and sort array, Sort users by age,Shuffle an array, Get average age  */

/* 1.	1.	Define a function copy and sort array() that takes an array as arguments and returns copyand sorted array.  */
describe("copySorted", function () {
    it("copySorted", function () {
        assert.strictEqual(copySorted["HTML", "JavaScript", "CSS"], ["HTML", "JavaScript", "CSS"]);
    });
    it("copySorted", function () {
        assert.strictEqual(copySorted[3, 2, 1], [1,2,3]);
    })
    it("copySorted", function () {
        assert.strictEqual(copySorted[-1, -3, -2], [-1,-2,-3]);
    });
});

/*
2.	Define a function sortByAge() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10,
 and multiply([1,2,3,4]) should return 24. 
 */
describe("sortByAge", function () {
    it("tests sortByAge", function () {
        assert.strictEqual(sortByAge[1, 2, 3], [1, 2, 3]);
    });
    it("tests sortByAge", function () {
        assert.strictEqual(sortByAge[3, 2, 10],[2, 3, 10] );
    });
});


/*
3.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one. 
*/
describe("shuffle", function () {
    it("shuffle", function () {
        assert.strictEqual(shuffle[3,5,1], [5,3,1]);
    });
    //it("tests longest with spaces", function () {
        //assert.strictEqual(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]), "a word with spaces");
    //});
});


/*
4.	getAverageAge 
Arrays have a getAverageAge method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. 
*/
describe("getAverageAge", function () {
    it("tests getAverageAge", function () {
        assert.deepEqual(getAverageAge[20,30,40], 30);
    })
    it("tests getAverageAge", function () {
        assert.deepEqual(getAverageAge[0,5,10,15,20] ,10);
    })
})

