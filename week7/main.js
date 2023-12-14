// const book = {
//     isbn:'123456789',
//     title:'Introduction to Javascript' ,
//     author:{firstname : 'Adam', lastname : 'Lee'},
//     publisher : {
//         name : 'HarperCollins',
//         location : 'USA'
//     }
// }

// const {title} = book;
// console.log(title);

// const {publisher:publisherName, isbn:isbn_book} = book;
// console.log(publisherName);
// console.log(isbn_book);

// const{
//     publisher : {location}
// } = book;
// console.log(location);

// let sum1 = (n1 , n2) => n1 + n2;

// let sum2 = (n1,n2) => {
//     return n1 + n2
// }

// let sum3 = (n1,n2) => {
//     let result = 0
//     result = n1+n2;
//     return result;

// }

// const echo = function(m){return m} //equals to const echo=m=>m
// console.log(echo('INT201'));

const fruits = ["apple", "mango", "orange", "pineapple"];
fruits.forEach((fruit) => console.log(fruit.charAt(0)));
let allFruits = '';
fruits.forEach((fruit) => (allFruits += fruit + ' '));
console.log(allFruits);

const students=[{id:1,firstName : 'Somchai',lastName : 'Japy'},
                {id:2, firstName : 'Somsri',lastName : 'Japa'},
                {id:3,firstName: 'Sompong',lastName : 'Jarkata'}]
const rtStudents = students.filter((student)=>student.lastName.toLowerCase().startsWith('Jap'));
console.log(rtStudents);

//student who has firstname or lastname include 'de' with case insensitive
const students1 = [{id:1,firstname: 'sade',lastname : 'song'},
                    {id:2,firstname: 'desk',lastname : 'sik'},
                    {id:3,firstname: 'dong',lastname : 'sdek'}]
const deStudent = students1.filter((student) => student.firstname.toLowerCase().includes('de')||
student.lastname.toLowerCase().includes('de'));
console.log(deStudent);

const ids = students.map((student)=>student.id)
console.log(ids);
//return students 'fullname, fullname format is "lastname, firstname"

const fullname = students.map((student)=> (`${student.lastName}, ${student.firstName}`));
console.log(fullname)
const currentYear = new Date(Date.now()).getFullYear()
const newids = students.map((student)=>{
    return currentYear + ' ' + student.id
})
console.log(newids);

const rtFirstStudentIndex = students.findIndex((student) => student.lastname.toLowerCase().startsWith('Jap'))
console.log(rtFirstStudentIndex);


console.log(students.every((student)=>student.id > 0))

console.log(students.some((student) => student.firstname.toLowerCase().endWith('sri')))