let todos = [];

function addTodo(desc){
    return todos.push(desc) 
}
function findTodo(searchId){
    return todos.find(({id}) => id === searchId)
}
function findIndexTodo(searchId){
    return todos.findIndex((id) => id === searchId)
}
function removeTodo(removeId){
    todos.pop((id) => id === removeId)
}
function getTodos(){
    return todos
}