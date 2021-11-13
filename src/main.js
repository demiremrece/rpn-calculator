// With Duplex streams, we can implement both readable and writable streams with the same object. It’s as if we inherit from both interfaces.
const RPN = require("./rpn");
const { isNumber } = require("./utils");

let RPNCalculator = new RPN();

process.stdin.on('data', (chunk) => {
  const input = chunk.toString().trim();

  if (input.toLowerCase() === 'q') return process.exit("Program exitted manually.");

  const result = RPNCalculator.interpret(input);

  if (isNumber(result)) return console.log(`>${result}`);

  // If the result is not a number, then it means we got a problem with our expression
  RPNCalculator = new RPN();
  console.log("An error occured. Invalid expression!. Restarted.");

});

process.on('exit', (message) => {
  console.log(message);
});


console.log("Welcome to RPN Calculator");