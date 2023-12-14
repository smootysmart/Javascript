const button = document.getElementById('Butt')
// button.addEventListener("click" , () => {
//     console.log(button.id)
// },false)
// button.addEventListener("click" , () => {
//     console.log('Hello World')
// },false)

let handle = function() {
    console.log(button.id)
}

button.addEventListener("click",handle,false)
