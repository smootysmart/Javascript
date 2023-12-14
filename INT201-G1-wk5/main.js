//create array witj literal [] เขียน array โดยการ insert ค่าเข้าไปเลย
let x = [] //type of array is object
console.log(typeof x)

if(x.length === 0) console.log("is Empty")
else console.log('not Empty array')

x[0] = 1
x[1] = 3
x[2] = 5

x.push(7)
x.push(9)
console.log(x)

const y = [1,true,'beginner',2.5]
console.log(y)
console.log(y[0])
console.log(y[y.length - 1]) 
console.log(y.length)

//nested array
const z =[
    [2,4,6] ,
    [true , false] ,
    ['a' ,'b' ,'c']
]
console.log(z[0])
console.log(z[z.length-1])

const m = [
    {productId : 1,name : 'pen', price : 200},
    {productId : 2,name : 'notebook', price : 1000},
    {productId : 3,name : 'pencil', price : 10}
]
console.log(m[0])
console.log(m[m.length - 1])

