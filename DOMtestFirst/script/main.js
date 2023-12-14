import {
  validateEmail,
  validatePassword,
  validateUsername
} from './validate.js'

const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
const firstButt = document.getElementById("color-btn");

firstButt.addEventListener("click", cColor);

function cColor() {
  let colorRan = colorArray[Math.floor(Math.random() * colorArray.length)];
  document.getElementById("rainbow").style = `background-color:${colorRan}`;
  localStorage.setItem("yourColor", colorRan);
}

const secondButt = document.getElementById("add-btn");

secondButt.addEventListener("click", addP);

function addP(e) {
  const ul = document.querySelector("#listItem>ul");
  const input = document.getElementById("item-input");


  if (input && input.value) {
    let list = document.createElement("li");
    list.innerText = input.value;
    ul.appendChild(list);
    input.value = ''
  }
}

const error = document.getElementsByClassName('error')[1]
const errortext = document.createElement('p')
const submit = document.getElementById('submit-btn')
submit.addEventListener('click', (event) => {
  event.preventDefault()
  const username = document.getElementsByClassName('input')[1]
  const email = document.getElementsByClassName('input')[2]
  const password = document.getElementsByClassName('input')[3]
  console.log(username.value)
  console.log(email.value)
  console.log(password.value)
  if (!validateUsername(username.value)) {
    console.log(validateUsername(username.value))
    errortext.textContent = ''
    errortext.textContent += `${username.value} is Invalid make sure to contain uppercase, number and notspecial charcter`
    error.appendChild(errortext)
  } else if (!validateEmail(email.value)) {
    console.log(validateUsername(email.value))
    errortext.textContent = ''
    errortext.textContent += `${email.value} ,This is not a Email format! Contain @ or .com`
    error.appendChild(errortext)
  } else if (!validatePassword(password.value)) {
    console.log(validateUsername(password.value))
    errortext.textContent = ''
    errortext.textContent += `${password.value} ,is not Invalid make sure to contain uppercase,lowercase, number and special character`
    error.appendChild(errortext)
  } else {
    errortext.textContent = ''
    errortext.textContent += 'Successfully! Yay'
    error.appendChild(errortext)
  }
})
