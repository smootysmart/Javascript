const x = 1
{
    const x = 2
    console.log(x)
}
function doIt(x){
    console.log(x)
}

console.log(x)
doIt(100)
console.log(x)

let msg =`hello`
console.log(msg.charAt(0))//String uses zero based index
let msgs = [...msg]//spread operator
console.log(msgs)

let n = '2'
console.log(typeof n)
console.log(typeof Number(n))//explict type conversion

let a = [8,3,2]
//with array
console.log(a?.[0])

//with obj
let b = {id : 1,fullname : 'somchai'}
console.log(b?.id)
console.log(b['id'])

let index = 0
let data
const firstItem = index?.[0]
console.log(firstItem)