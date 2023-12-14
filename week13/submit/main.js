// const submitButton = document.getElementById("submit-btn-01");

// submitButton.addEventListener("click", (e) => {
//   e.preventDefault(); // ไม่ต้องทำตาม Default
//   console.log("submit clicked");
//   const inputElements = document.querySelectorAll('input')
//   const pElement = document.querySelector('p')

//   if(inputElements[0].value.length === 0 || inputElements[1].value.length === 0){
//     pElement.textContent='some value are missing, please check'
//   }else{
//     pElement.textContent='success'
//   }
// });

//=================== My Stupid Brain not Responeding
// const form1 = document.body.firstElementChild

// const text1 = form1.childNodes[1]
// const pass1 = form1.childNodes[3]

// submitButton.addEventListener("click", (e) => {
//   e.preventDefault(); // ไม่ต้องทำตาม Default
//   console.log("submit clicked");
//   if(checkText === null || checkPass === null){
//     console.log('error please input username and password')
//   } else {
//     console.log('success')
//   }
//   console.log(checkText)
//   console.log(checkPass)

// });

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is loaded");
});
document.addEventListener("load", () => {
  console.log("load");
});
document.addEventListener("beforeunload", () => {
  console.log("before unload");
  localStorage.setItem('myCat','Tom')
});
const inputElements = document.querySelectorAll('input')
inputElements[0].addEventListener('focus', () => {
  console.log('input focused')
})
inputElements[0].addEventListener('blur', () => {
  console.log('input blured')
})
