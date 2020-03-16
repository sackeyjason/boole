function add() {
  const [ x, y, ...rest ] = arguments
  if (arguments.length > 2)
    return add(add(x, y), ...rest)
  return (x + y) % 2
}

function multiply(x, y) {
  return x * y % 2
}

module.exports.add = add
module.exports.multiply = multiply

