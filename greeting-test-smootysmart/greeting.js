function greeting(someone) {
  if (someone === null || someone === undefined) {
    return `hello, guest`;
  } else {
    return `hello, ${someone}`;
  }
}
module.exports = greeting;