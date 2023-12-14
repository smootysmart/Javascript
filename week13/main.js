const divOuter = document.getElementById("outer-div");
const divInner = document.getElementById("inner-div");

const button = document.querySelector("button");

// select event type 'click'
// register event type to HTML object
function doSomething() {
  console.log("outer div is click");
}
// divOuter.addEventListener("click",() =>{
//     console.log('outer div is click')
// })
function outerDiv() {
    console.log("Outer");
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.eventPhase);
    console.log("==========================");
}

divOuter.addEventListener("click", outerDiv, true);
//first parameter is type and second is call back ()

divInner.addEventListener(
  "click",
  (event) => {
    console.log("Inner");
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.eventPhase);
    console.log("==========================");
    removeEventListener("click",outerDiv,true)
  },
  true
);

button.addEventListener(
  "click",
  (event) => {
    console.log("Button");
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.eventPhase);
    console.log("==========================");
  },
  true
);
button.addEventListener("click",doSomething,true)
button.removeEventListener("click",doSomething,true)
