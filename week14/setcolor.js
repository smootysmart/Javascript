window.addEventListener('load', () => {
    document.body.style = `background-color:${localStorage.getItem('yourColor')}`
  })
  const colorInput = document.getElementById('bgColor')
  colorInput.addEventListener('input', (e) => {
    console.log(e.target.value)
    document.body.style = `background-color:${e.target.value}`
    localStorage.setItem('yourColor', e.target.value)
  })
  
// const color = document.getElementById('bgColor')
// const background = document.body

// const storecolor = localStorage.getItem('backgroundColor')

// const Usercolor = background.style.backgroundColor = color

// localStorage.setItem('backgroundColor', Usercolor)
