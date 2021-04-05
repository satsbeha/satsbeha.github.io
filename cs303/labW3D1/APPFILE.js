"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {sayHi, askPassword, askPasswordd,  }; //add all of your function names here that you need for the node mocha tests

//1 Function property after bind


//There’s a value in the property of a function.
// Will it change after bind? Why, or why not?
function sayHi() {
    console.timeLog( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  console.log( bound.test ); // what will be the output? why?

  //The answer: undefined.

//The result of bind is another object. It does not have the test property.

//2 Fix a function that loses “this” (do with bind, wrapper, call, and apply)
/*
The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.

But it leads to an error. Why?

Fix the highlighted line for everything to start working right (other lines are not to be changed).
*/
/*
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
      console.log(`${this.name} logged in`);
    },
  
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk, user.loginFail);
  */

  /*
  The error occurs because ask gets functions loginOk/loginFail without the object.

When it calls them, they naturally assume this=undefined.

Let’s bind the context:
*/
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
        console.log(`${this.name} logged in`);
    },
  
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

  //3 Partial application for login
  /*
  The task is a little more complex variant of Fix a function that loses "this".

  The user object was modified. Now instead of two functions loginOk/loginFail, it has a single function user.login(true/false).
  
  What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?

  */
 function askPasswordd(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      console.loginFail( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
 // askPassword(?, ?); // ?

 
 

 //create a partial function from user.login that uses user as the context and has the correct first argument:

askPasswordd(user.login.bind(user, true), user.login.bind(user, false));
