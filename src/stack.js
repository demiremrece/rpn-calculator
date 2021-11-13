module.exports = class Stack {

  constructor() {
    this.memo = [];
  }

  pop() {
    return this.memo.pop();
  }

  push(el) {
    this.memo.push(el);
  }

  getTopElement() {
    return this.memo[this.memo.length - 1];
  }

  getAll() {
    return [...this.memo];
  }

  getLength() {
    return this.memo.length;
  }
}