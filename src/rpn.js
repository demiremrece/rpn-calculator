const Stack = require("./stack");
const { isNumber, Operands } = require("./utils");

class RPN {
  constructor() {
    this.stack = new Stack();
    this.operands = Operands;
  }

  interpret(str) {
    const inputArr = str.length > 0 ? str.split(" ") : [];

    for (const token of inputArr) {       
      let elementToPush = null;
      if (isNumber(token)) {
        elementToPush = parseFloat(token);
      } else {
        if (this.operands.indexOf(token) !== -1 && this.stack.getLength() > 1) {
          const topFirst = this.stack.pop();
          const topSecond = this.stack.pop();

          elementToPush = eval(topSecond + token + topFirst);
        }
      }

      this.stack.push(elementToPush);
    }

    return this.stack.getTopElement();
  }
}

module.exports = RPN;