"use strict";

/* global assert Student, Teacher */
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.    */

const assert = require("assert");  //always need this with node
const myExports = require("./APPFILE.js");  //with node need the name of your file with your functions here
const quiz = myExports.quiz;  //do this for all of the functions used in the Mocha tests
const Teacher = myExports.Teacher; 
//const Person = myExports.quiz.scoreStudent;


describe("test inheritance from Person", function () {
/*
    it("student inheritance", function () {
        const john = new Student();
        john.initialize("John", 25);
        assert.strictEqual(john.learn("Inheritance"), "John just learned Inheritance");
    });
    */
    it("teacher inheritance", function () {
        const bob = new Teacher();
        bob.initialize("Bob", 25);
        assert.strictEqual(bob.teach("Physics"), "Bob is now teaching Physics");
    });
    describe("grades from quiz", function () {
        it("scoreStudent 10", function () {
            assert.strictEqual(quiz.scoreStudent(10), 1);
        });
        it("scoreStudent 11", function () {
            assert.strictEqual(quiz.scoreStudent(11), 2);
        });
        it("scoreStudent 12", function () {
            assert.strictEqual(quiz.scoreStudent(12), 2);
        });
        it("getAverage", function () {
            assert.strictEqual(+quiz.getAverage().toFixed(3), 1.667);
        });
    });
})
