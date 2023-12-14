//================ arguments object ===============
// function ops(n1, n2, n3){
//     console.log(arguments)
//     console.log(arguments.length)
//     for(const a of arguments){
//         console.log(a)
//     }
//     arguments[0]=55
//     console.log(arguments[0])
// }

// console.log(ops(5, 10, 15))


//=============== default parameter ====================
// function ops(n1=0, n2=false, n3="unknow"){
//     console.log( n1, n2, n3)
// }
// ops(1, undefined, "noppakrit")
// ops(undefined, undefined, undefined)
// ops(555, true, 'js')


//=============== rest parameter =======================
// function ops(n1, n2, ...n3){
//     console.log(n1, n2, n3)
//     console.log('length :', arguments.length)//combine with arguments object
//     for(const ar of arguments){
//         console.log(ar)
//     }
// }
// ops(5, 10, 15, 20, 25)


//=============== destructuring + rest parameter on array ============
// const [a, ...b] = ['a','b','c','d']
// console.log(a)
// console.log(b)
//=============== destructuring of Object สน property
// const {id: studentId,...n} ={id : 1, title : 'js', authors: 'Jame Smiths'}
// console.log(studentId)
// console.log(n)


//=============== Spread Parameter 
// function sum(n1, n2, n3){
//     console.log(n1)
//     console.log(n2)
//     console.log(n3)
//     return  n1 + n2 + n3
// }
// const nums = [10, 20, 30]
// console.log(sum(nums))
// console.log(sum(...nums))//spread

//=============== destructuring of array สนลำดับ
// function arrayAdd1([x1],[x2]){
//     return x1 + x2
// }
// const a =[5 ,8]
// const b =[2 ,7]
// console.log(arrayAdd1(a,b))


//================== destructuring of object สน property
// const student = {id: 65130500032, name: 'Noppakrit Nitichaisatit'}

// const {id: studentId} = student
// const {name: studentName} = student

// console.log(studentId)
// console.log(studentName)

// function doSomething({id: studentId}){
//     return studentId
// }
// console.log(doSomething(student))


//================== Nested 
