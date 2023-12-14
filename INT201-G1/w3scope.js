//a, b, c, f are global
let a = 1;
const b = 2;
var c = 3;
// d, e are block scope
{
  let d = 4;
  const e = 5;
  var f = 6;
  console.log(`block scope`);
  console.log(d);
  console.log(e);
  console.log(f);
}
//h, i, j are function scope
function doIt() {
  let h = 7;
  const i = 8;
  var j = 9;
  console.log(`scope function`);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(h);
  console.log(i);
  console.log(j);
}
console.log(`scope global`);
console.log(a);
console.log(b);
console.log(c);
console.log(f);

doIt();
