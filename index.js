/**
 * Addition % 2
 */
function add() {
  const [...addends] = arguments
  return addends.reduce((acc, addend) => acc + addend) % 2
}

function multiply(x, y) {
  return x * y % 2
}

module.exports.add = add
module.exports.multiply = multiply

