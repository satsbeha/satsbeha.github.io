"use strict";
//const assert = require("assert");
//const myExports = require("./APPFILE.js");
//const topSalary = myExports.topSalary;
//const getWeekDay = myExports.getWeekDay;
//const getLocalDay = myExports.getLocalDay;
//const getDateAgo = myExports.getDateAgo;
/**test for finds the name of the top-paid person
 * @param  {string} "" a description about the test
 * @param  {function} function test a unit case
 * @return {boolean} return true or false
 */
describe("Top Salary", function () {
    it("Returns top paid person", function () {
        assert.equal(topSalary({
            "John": 100,
            "Pete": 300,
            "Mary": 250
        }), "Pete");
    });

    it("Returns top paid person", function () {
        assert.equal(topSalary({
            "Mrx": 300,
            "Mry": 600,
            "Mrz": 250
        }), "Mry");
    });


    it("returns null for the empty object ", function () { assert.strictEqual( topSalary({}), null); });

});
describe("Get a WeekDay", function () {



    it("3 January 2014 - friday ", function () { assert.equal(getWeekDay(new Date(2014, 0, 3)), "FR"); });
    it("4 January 2014 - saturday ", function () { assert.equal(getWeekDay(new Date(2014, 0, 4)), "SA"); });
    it("5 January 2014 - sunday", function () { assert.equal(getWeekDay(new Date(2014, 0, 5)), "SU"); });

});

describe("Get European day of week for date", function () {



    it("3 January 2014 - friday ", function () { assert.equal(getLocalDay(new Date(2014, 0, 3)), 5); });
    it("4 January 2014 - saturday ", function () { assert.equal(getLocalDay(new Date(2014, 0, 4)), 6); });
    it("5 January 2014 - sunday", function () { assert.equal(getLocalDay(new Date(2014, 0, 5)), 7); });

});



describe("Check Which day of month was many days ago?", function () {



    it("1 day before 02.01.2015 -> day 1  ", function () { assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1); });
    it("2 days before 02.01.2015 -> day 31  ", function () { assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31); });
    it("100 days before 02.01.2015 -> day 24 ", function () { assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24); });

});



