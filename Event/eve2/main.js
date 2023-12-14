const button = document.getElementById('myBtn')

button.addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}