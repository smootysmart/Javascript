let str = 'hello';
str = str.toUpperCase();
console.log(str);

let a  = null;
let total
console.log(a);
if(total==undefined) console.log('variable does not have initial value')
if(a==null) console.log('variable has null value')

//back tick
if('3' === 3) console.log(`'3' === 3':${'3' === 3}`);
if('2' == 2) console.log(`'2' == 2':${'2' == 2}`);

//object sample
const obj = { id:1001, name: 'pen', price : 100};
const obj2 = { id:2001, name: 'eraser', price : 20};
// obj = obj2; //obj cannot change reference value

obj.id = 999; //but obj can update its properties

const pi = 3.14
console.log(typeof obj)