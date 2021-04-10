" use strict"


//1. Chapter: Inheritance Section: Prototypal inheritance

//Working with prototype
/*
Here’s the code that creates a pair of objects, then modifies them.

Which values are shown in the process?
*/
let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit.jumps ); // ? (1)
  
  delete rabbit.jumps;
  
  console.log( rabbit.jumps ); // ? (2)
  
  delete animal.jumps;
  
  console.log( rabbit.jumps ); // ? (3)

  /*

  true, taken from rabbit.
null, taken from animal.
undefined, there’s no such property any more.

*/

// 2  Searching algorithm

/*The task has two parts.

Given the following objects:
*/

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };

  /*
 1. Use __proto__ to assign prototypes in a way that
  any property lookup will follow the path: pockets → bed → table → head.
   For instance, pockets.pen should be 3 (found in table),
    and bed.glasses should be 1 (found in head).
 2.Answer the question: is it faster to get glasses as pockets.glasses or head.glasses?
  Benchmark if needed.
  */

 // 1 Let’s add __proto__:

 let head = {
   glasses: 1
 };
 
 let table = {
   pen: 3,
   __proto__: head
 };
 
 let bed = {
   sheet: 1,
   pillow: 2,
   __proto__: table
 };
 
 let pockets = {
   money: 2000,
   __proto__: bed
 };
 
 console.log( pockets.pen ); // 3
 console.log( bed.glasses ); // 1
 console.log( table.money ); // undefined
 /*
 2
 In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype.
  They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head),
 and next time will search right there. They are also smart enough to update internal
  caches if something changes, so that optimization is safe.
  */
 //3 Where it writes?
/*
 We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?
*/
let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();

  /*
  The answer: rabbit.

That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

Property lookup and execution are two different things.

The method rabbit.eat is first found in the prototype, then executed with this=rabbit.

// 4 Why two hamsters are full?
/*
We have two hamsters: speedy and lazy inheriting from the general hamster object.

When we feed one of them, the other one is also full. Why? How can we fix it?
*/
let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple

  /*Let’s look carefully at what’s going on in the call speedy.eat("apple").

The method speedy.eat is found in the prototype (=hamster), then executed with this=speedy (the object before the dot).

Then this.stomach.push() needs to find stomach property and call push on it. It looks for stomach in this (=speedy), but nothing found.

Then it follows the prototype chain and finds stomach in hamster.

Then it calls push on it, adding the food into the stomach of the prototype.

So all hamsters share a single stomach!

Both for lazy.stomach.push(...) and speedy.stomach.push(), the property stomach is found in the prototype (as it’s not in the object itself), then the new data is pushed into it.

Please note that such thing doesn’t happen in case of a simple assignment this.stomach=:
*/
let hamster = {
    stomach: [],
  
    eat(food) {
      // assign to this.stomach instead of this.stomach.push
      this.stomach = [food];
    }
  };
  
  let speedy = {
     __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Speedy one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // Lazy one's stomach is empty
  console.log( lazy.stomach ); // <nothing>
  /*

  Now all works fine, because this.stomach= does not perform a lookup of stomach. The value is written directly into this object.

Also we can totally avoid the problem by making sure that each hamster has their own stomach:
*/

