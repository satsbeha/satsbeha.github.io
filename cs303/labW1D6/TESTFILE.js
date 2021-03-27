"use strict";
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


    it("returns null for the empty object ", function () { assert.isNull(topSalary({})); });

});


