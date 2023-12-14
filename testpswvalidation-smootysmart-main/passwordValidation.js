// 65130500032 Noppakrit Nitichaisatit
function isPasswordValid(password) {
  //write your code here...
  const special = /[@#$%^&*!]/
  const upper = /[A-Z]/;
  const lower = /[a-z]/;

 
  if (password === null || password === undefined) {
    return false
  }else if(password.length < 8){
    return false
  }else if (!upper.test(password)){
    return false
  }else if (!lower.test(password)){
    return false
  }else if (!/\d/.test(password)){
    return false
  }else if(!special.test(password)){
    return false
  }else{
    return true
  }

}

console.log(isPasswordValid('Abc12345!'))
module.exports = isPasswordValid
