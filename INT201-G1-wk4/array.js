// array data type
let x = [1,3,true,'unknow']

//object data type
let m = {id : 1 , title : 'pen'}

let score = 101
let grade = 'F'
//<40 'F, 41-70 'GOOD', 71 - 100 'VERY GOOD'
if(score<0 || score>100) grade='Invalid score'
else if(score > 70 ) grade = 'Very Good'
else if (score > 40) grade = ' Good'
console.log(grade)