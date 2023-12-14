//4. create array with Array.of() function
const x = Array.of(5)
const y = Array.of(1, 5, 7)
const z = Array.of(true , 'A' ,'35')

console.log(x)
console.log(y)
console.log(z)

//5.create array with Array.form
const a = [1,3,5]
const b = [2,4,6]
let c = Array.from(a)
const d = [...x , ...y]
console.log(d)
console.log(a)