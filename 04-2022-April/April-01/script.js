var sample = function(){
    var a = b = 3;
  }
  sample();
  console.log("Is a defined?", typeof a !== "undefined");
  console.log("Is b defined?", typeof b !== "undefined");

  // question: why is "a" undefined? why does "b" get to keep it value of 3?

  /*
  Answer: var a = b = 3  is NOT shorthand for:
  var a = 3;
  var b = 3;

  but is INSTEAD short for:
  b = 3;
  var a = b;

  Since b is not preceded by "var", or "let", or "const", it is
  being treated like a global variable and retains persistent value.

  A is declared with "var" within the function, and only gets to have local scope to that function. So when the function is called, a loses its value
  in the global scope when the function execution terminates.

  */