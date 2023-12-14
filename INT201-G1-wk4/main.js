// //optional chaining
// let index = 0;
// let data = [2, 5, 6];
// const firstItem = data?.[0];
// console.log(firstItem);

// let student = { firstname: "Smart" };
// console.log(student?.firstname);

// //nullish
// let m = 1;
// let n = m ?? 0; // equals to m!==null && m !==undefined? m : 0
// console.log(n);

// let a = 2;
// let c = 10;
// cal = c ?? a;
// console.log(cal);

// let options = { delay: "5ms" };
// options.title = options.title ?? "untitled";
// console.log(options);

// let y = []; //array initiallization with empty array
// let x = {}; //object initiallization with no property
// console.log(typeof y);
// console.log(typeof x);

// let b = 1;
// a = b ?? y;
// console.log(a);

// const rand = Math.ceil(Math.random() * 10);
// console.log(rand);
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));

// console.log(Math.PI);

// console.log(Math.round(Math.random() * (100 - 25) + 25));

// for (let i = 0; i < 3; i++) {
//   let n1 = 100,
//     n2 = 25;
//   const rand1 = Math.floor(Math.random() * (n1 - n2 + 1) + n2);
//   console.log(rand1)
// }

// function mathRandom(min, max) {
//     for (let i = 0; i < 3; i++) {
//       const rand1 = Math.floor(Math.random() * (max - min + 1) + min);
//       console.log(rand1);
//     }
//   }

  let x = [1,3,true,'unknow']
  let y = [1,3,true,'unknow']
  let z = x // give memmory address from f to k
  console.log(x  === y)
  console.log(z === x)

  z[0] = 'A'
  x[0] = 'B'
  y[0] = 'A'

  console.log(x)
  console.log(y)
  console.log(z)

// object type
let m = {id : 1, title : 'pen'}
let n = {id : 1, title : 'pen'}

let o = m
console.log(m === o)
console.log(m === n)
o.id = 888

console.log(m)
console.log(o)

  //primitive type
  let a =5
  let b = 5
  let c = a // give data 5 from a to c
  console.log(a === b)
  console.log(b===c)
