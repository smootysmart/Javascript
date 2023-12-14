// const names = ['alice','John','Bob','Ann']
// const inStartWithALetter = names.every( (name) => name.toLowerCase().startsWith('a'))
// console.log(inStartWithALetter)

// const isSomeStartWithALetter = names.some( (name) => name.toLowerCase().startsWith('a'))

// const namesStartingWithA = names.filter(name => name.toLowerCase().startsWith('a'));
// console.log(namesStartingWithA);

// console.log(isSomeStartWithALetter)



//=============== REDUCE =====================

// const names = ["Alice", "Bob", "Ann", "Cath"];
// const firstC = names.reduce((all, first) => all + first.charAt(0), ``);
// console.log(firstC);

// const buyProducts = [
//   {price: 50, quantity: 2},
//   {price: 299, quantity: 10},
//   {price: 15, quantity: 5}
// ]

// const sumPrice = buyProducts.reduce((now,next) => now + (next.price * next.quantity),0)
// console.log(sumPrice)

// =================== SPLICE =========================
// const nums = [10,9,5,7,3,4]
// //remove
// const removeEl = nums.splice(2,3) // startIndex , Numberofdelete element

// console.log(removeEl)

// const addEl = nums.splice(2, 0,5,7)
// console.log(addEl)
// console.log(nums)

// const replaceEl = nums.splice(2,1,20,25)
// console.log(replaceEl)
// console.log(nums)

//==========================================

//replace negaive method numbers to zero
// const nums = [-5,-6,7,8,9,-1,0]
// const replaceNeg = nums.map( (num) => num < 0 ? 0 : num)
// console.log(replaceNeg)

//================== include ===============
// const msg = 'Today is a present'
// console.log(msg.includes('Re'))
// console.log(msg.includes('re'))
// console.log(msg.includes('day'))
// console.log(msg.includes('present'))

// console.log('========================')

// const newMsg = msg.split(' ')
// console.log(newMsg.includes('Re'))
// console.log(newMsg.includes('re'))
// console.log(newMsg.includes('day'))
// console.log(newMsg.includes('present'))

//=================== REVERSE , SORT , JOIN===============
// const nums = [-5,-6,7,8,9,-1,0]
// console.log('before', nums)
// nums.reverse()
// console.log('after', nums)

// const numString = nums.join(' ')
// console.log(nums)
// console.log(numString)

// console.log(nums.splice(3,0,77))

// console.log(nums.sort())

// // nums.sort( (num1,num2) => num1 - num2) //asc
// nums.sort( (num1,num2) => num2 - num1) //desc

// console.log(nums)

//===================== HOMEWORK ================
// const students = [
//   {id: 1, name:'John Lee'},
//   {id: 2, name: 'adam Smith'}
// ] 
// //sorting by id(asc and desc)
// console.log(students.sort( (student1, student2) => student1.id - student2.id))

// console.log(students.sort( (student1, student2) => student2.id - student1.id))
// //sort by name (asc and desc)

// const word = ['Ant','apple','Book','Cat']
// console.log(word.sort())

//=================== working function ============================
// const add = (n1,n2) => n1+n2
// const minus = (n1,n2) => n1 - n2
// const divide = (n1,n2) => n1 / n2
// function op(n1,n2,op){
//   return op(n1,n2)
// }
// function doSommething(op){
//   return op
// }
//==========================================================
// let a = 1 
// let b = 10
// function doSomething(){
//   let b =5
//   let result = a + b
//   console.log(result)
//   function doIt(){
//     let c = 100
//     console.log(c)
//     result += c //closures function 
//     console.log(result)
//   }
//   return doIt

// }
// // function doSomething(){
// //   a=100
// //   return a + b
// // }
// const fn = doSomething()
// console.log(typeof fn)
// fn()
//================ Closures ===============
function counter(){
  let count = 1
  function increment(){
    return ++count
  }
  function decrement(){
    return --count
  }
  return {increment : increment,decrement:decrement}
}
