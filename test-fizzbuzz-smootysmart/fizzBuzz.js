function fizzBuzz(max) {
  let a = ''
  for (let i = 1; i <= max; i++) {
    if (i % 3 == 0 && i % 5 == 0)  a += "FizzBuzz"
    else if (i % 3 == 0) a += "Fizz"
    else if (i % 5 == 0) a +="Buzz"
    else a += i.toString();
  }
  return a
}

console.log(fizzBuzz(16))

module.exports = fizzBuzz
