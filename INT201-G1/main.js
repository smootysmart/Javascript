//synchronous programming
//interpreter translator
function greeting(someone){
    return 'hello ' + someone;
    // return `hello,  ${someone}`;
 }
let $myName = "Noppakrit Nitichaisatit";
var myAge = '10';
let _nickName = "Smart";
console.log("starting . . .");
console.log(greeting($myName));
//asynchronous programing
setTimeout(()=>{
    console.log('more complex task finish . . .');
    // console.log('complex task finish . . .')
}, 2000);

console.log(_nickName);
console.log(myAge);
setTimeout(()=>{
    console.log('simple task finish . . .');
    // console.log('complex task finish . . .')
}, 10000);
console.log("Good Bye . . .");