//weakly and dynamic types
let num = 1;
console.log(typeof num);

num = true;
console.log(typeof num);

if (typeof num === "boolean") console.log("num is a boolean type");

let a = 1n;
console.log(typeof a);

let b = 3.2;
console.log(typeof b);

let c = `A-${b / 2 + 1}`;
console.log(c);
console.log(typeof c);

//check data

if ("1") console.log("1 is a boolean true");
else console.log("1 is a not boolean");

if (0) console.log("value is zero");
else console.log("value is not zero");

if (2) console.log("value is two");
else console.log("value is not two");

let msg = "a";

if (msg) console.log("an empty string");
else console.log("not empty string");

//object type is a mutable
//sample array data type []
const nums = [1, 3, 5, 7];
nums[nums.length] = 9;

console.log(nums[nums.length] = 9  )

console.log(nums);
console.log(typeof nums);
//sample object data type: collection of peoperties {}
const obj = { id: 1, price: 100 };
console.log(typeof obj);

obj.id = 55;

console.log(obj);
console.log(typeof obj);

const An = 1;

const text = JSON.stringify(obj);
console.log(`This is ` + text);
console.log(`This is ${obj}`)

console.log(`An = ${An}`);

function doSomething(activity) {
  if (activity === null) return `activity is null`;
  if(activity === undefined) return `activity is undefined`
  return `${activity} is done`;
}
console.log(typeof doSomething);
console.log(doSomething(`play game`))
let act
let act1 = `ball`
let act2= null
console.log(doSomething(act))
console.log(doSomething(act1))
console.log(doSomething(act2))

let aa,bb =0,cc =`Hello`
console.log(aa)
console.log(bb)
console.log(cc)

