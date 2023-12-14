//function declaration
function concat(str1,str2){
    return str1 + str2
}

//function with function expression
const toUpper = function (str1){
    return str1.toUpperCase()
}

//3.create function with named function expression
const reverse = function rev(str1){
    return [...str1].reverse().join('')
}
console.log(concat('js', 'beginning'))
console.log(toUpper('hello world'))
console.log(reverse('hello world'))
// doSomething is a higher order function because it accept op function as its
const doSomething = function (str1, op){
    return op(str1)
}

console.log(doSomething('hey',toUpper))
console.log(doSomething('hey',reverse))