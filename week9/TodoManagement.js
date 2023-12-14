const Todo = require('./todo.js')
// const echo = require('./doSomething.js') // เปลี่ยนชื่อได้ type 1
const {doSomething} = require('./doSomething.js')

function TodoManagement() {
    let todos = [];
    function addTodo(desc) {
      const newTodo = new Todo(todos.length + 1, desc);
      todos.push(newTodo)
      return newTodo
    }
  
    function findTodo(searchId) {
      const found = todos.find(({ id }) => id === searchId);
      return found;
    }
  
    function findIndexTodo(searchId) {
      const found = todos.findIndex(({ id }) => id === searchId);
      return found;
    }
  
    function removeTodo(removeId) {
      const remove = todos.slice(({ id }) => (id === removeId));
    }
  
    function getTodos() {
      return todos;
    }
  
    return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos };
  }

  const tdm = TodoManagement()
  console.log(tdm.addTodo('swimming'))
  console.log(tdm.addTodo('running'))
  console.log(tdm.addTodo('physic'))
  console.log(tdm.addTodo('Math'))
  console.log(tdm.getTodos)
  
  console.log(tdm.findIndexTodo(1))

  console.log(doSomething('AAA'))