"use strict";



/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    
        let max = a;
        if(b>a&&b>c){
            max = b;
        }
        
        if(c>b&&c>a){
            max = c;
            
        }
        return max
    }
    console.log(maxOfThree(-3,-5,0));


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    
    for (let i = 0; i < arr.length; i++) {
        tot+=arr[i];
    }

    return tot;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for (let i = 0; i < arr.length; i++) {
        tot*=arr[i];
    }
    return tot;

}



/**
 * 
 * @param {Array} arr of string
 * @returns {string} longest string
 */


function findLongestWord(array) {
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > array[0].length) {
            longest = array[i];
        }
    }
    return longest;
}
//let a = ["so","sol","solo","solomon"]

/**
 * 
 * @param {Array} arr of string
 * @returns {Array} arr of string
 */


function reverseArray(arr){
    let temp = [];
    for (let  i = arr.length-1;i>=0; i--) {
        temp.push(arr[i])
    }
    return temp;
}
console.log(reverseArray(["A", "B", "C"]));

/**
 * 
 * @param {Array} arr of number score
 *  @param {Array} arr of number answer
 * @returns {Array} arr count of correct answer
 */

function scoreExams(arr1, arr2) {
    let correctAnswer = [];
    for (let i = 0; i < arr1.length; i++) {
        let count = 0;
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] === arr2[j]) {
                count++;
            }
        }
        correctAnswer.push(count);
    }
    return correctAnswer;
}
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2];
console.log(scoreExams(studentAnswers, correctAnswers));