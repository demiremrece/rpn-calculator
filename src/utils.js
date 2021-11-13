module.exports.isNumber = (str) => {
  return /^-?([0-9]+\d*([.]\d+)?)$/.test(str);
}

module.exports.Operands = "+-/*";