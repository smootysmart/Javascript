// //common js
// import s ,{section, minus} from '../week11/utils.js'
// console.log(s(10,10))
// console.log(minus(10,10))
// console.log(section)
// // console.log(section)
//=================RECAP==========================

const rootNode = document

// console.log(rootNode)
// console.log(rootNode.nodeName)
// console.log(rootNode.nodeType)
// console.log(rootNode.nodeValue)

// console.log(document.documentElement) // root Element
// console.log(document.documentElement.nodeType)

// console.log(document.body) // html>body Element Node is 1
// console.log(document.body.nodeType)
// console.log(document.head) // html>head Element Node is 1
// console.log(document.head.nodeType)
// console.log(document.title)// html>head>title text Node is 9
//============= learn what is Node type or how to call Element Node

const headElement = document.head //headElement is a head element node
// console.log(headElement)

// console.log(headElement.childNodes)//return Node list |children
// console.log(headElement.children)//return HTMLCollection | child elements

const headChildNodes = headElement.childNodes
// headChildNodes.forEach((hc) => {
//     console.log(hc.nodeName)
//     console.log(hc.nodeType)
//     console.log(hc.nodeValue)
// })

// console.log('=============================')
// const headChildren = headElement.children
// Array.from(headChildren).forEach((hc) => {
//     // console.log(hc.nodeName)
//     // console.log(hc.nodeType)
//     // console.log(hc.nodeValue)
//     console.log(hc)
// })

// //First Element
// console.log(headElement.firstElementChild) // หา element แรก
// console.log(headElement.firstChild)
// //Last Element
// console.log(headElement.lastElementChild) // หา element สุดท้าย
// console.log(headElement.lastChild)
// //parent
// console.log(headElement.parentElement);
// console.log(headElement.parentNode)

//sibling
console.log(headElement.previousElementSibling)
console.log(headElement.previousSibling)

console.log(headElement.nextElementSibling)
console.log(headElement.nextSibling)

const headFirstElementChild = headElement.firstElementChild
const headFirstElementChildAttrs =  headFirstElementChild.attributes

console.log(headFirstElementChild)
Array.from(headFirstElementChildAttrs).forEach((attr) => console.log(attr))