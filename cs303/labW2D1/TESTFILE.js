"use strict";
/*eslint-disable*/
const assert = require("assert");
const myExports = require("./APPFILE.js");
//const topSalary = myExports.topSalary;
//const getWeekDay = myExports.getWeekDay;
//const getLocalDay = myExports.getLocalDay;
let array = [];
describe("My own map", function () {
    beforeEach(function () {
        array = [1, 2, 3, 4, 5];
    });
    it("doubles an array of numbers", function () {
        function arrTimesthree(arr) {
            let result = [];
            for (let values of arr) {
                result.push(values * 3);
            }
            return result;
        }
        assert.deepEqual(myMap(array, arrTimesthree), [3, 6, 9, 12, 15]);
        assert.deepEqual(array, [1, 2, 3, 4, 5]);  //test for pure function
    });
    it("filter an array of numbers", function () {
        function myEven(arr) {
            let result = [];
            for (let values of arr) {
                if (values % 2 === 0) {
                    result.push(values);
                }
            }
            return result;
        }
        assert.deepEqual(myMap(array, myEven), [2, 4]);
        assert.deepEqual(array, [1, 2, 3, 4, 5]);  //test for pure function
    });
    it("reduce an array of numbers", function () {
        function sumReduce(arr) {
            let sum = 0;
            for (let value of arr) {
                sum = sum + value;
            }
            return sum;
        }
        assert.deepEqual(myMap(array, sumReduce), 15);
        assert.deepEqual(array, [1, 2, 3, 4, 5]);  //test for pure function
    });
});

