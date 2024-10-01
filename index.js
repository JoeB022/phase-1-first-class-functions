// This function accepts a callback function as an argument and calls it.
function receivesAFunction(callback) {
    callback();
  }
  
  // This function returns a named function.
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function");
    };
  }
  
  // This function returns an anonymous function.
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }
  
  // Export the functions for the test to work
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  