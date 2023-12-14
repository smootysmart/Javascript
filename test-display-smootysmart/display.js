function display(content) {
  //code here
  if(content === null || content === undefined){
    return 'no message'
  } else{
    return `your message is ${content}`
  }
}

module.exports = display
