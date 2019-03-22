// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function sumNums(x, y, cb) {
  return cb(x + y);
};

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(x, y, add) {
  return add(x + y);
};

function multiply(a, b, multiply) {
  return multiply(a * b);
};

function greeting(i, j, greeting) {
  return greeting(`Hello ${i} ${j}, nice to meet you!`);
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
 add(2,2, function(add){ console.log (add)}); // 4
 multiply(10,16,function(multiply){console.log(multiply)}); // 160
 greeting("Mary","Poppins", function(greeting){console.log(greeting)}); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();