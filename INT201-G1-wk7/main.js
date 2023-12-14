//1.create object by literal
const student = {id:65130500032, name: 'Smart', firstname : 'Noppakrit'};
const date = new Date ('December 17, 1995 03:24:00')
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(typeof student);
console.log(Object.prototype.isPrototypeOf(student));
console.log(Date.prototype.isPrototypeOf(student));
console.log(Date.prototype.isPrototypeOf(date));

const lecture = {id: 1001, firstname : 'bla' , lastname: 'bla'}
console.log(Object.prototype.isPrototypeOf(lecture));

//way to get property
const someoneId = student.id;//object.key
const someoneFirstName = student['firstname'];//object['key']
console.log(someoneId);
console.log(someoneFirstName);

//way to assign /set property value
student.id = 6513052002;
student['firstname'] = 'john';
console.log(student.id);
console.log(student['firstname']);

//dynamic property
//add new property
student['email'] = 'KUY@gmail.com';
student.address = 'Bangkok, Thailand';
console.log(student);
//delete existing property
delete student.address;
console.log(student);

//nested object
student.advisor = lecture;
console.log(student);

console.log(student.advisor.firstname);
console.log(student['advisor']['firstname']);

//function declaration
function doSomething(){
    
}

//function expression
student.getFullName=function(){
    return `${this.firstname} ${this.name}`;
}

console.log(student.getFullName);//get property value getFullName
console.log(student.getFullName());//execute function getFullName()

const student2 = {id: 2, name: 'blue',firstname: 'chanapon'}
student2.getFullName=function(){
    return `${this.firstname} ${this.name}`
}
console.log(student2.getFullName())

function Person(id ,firstname,lastname){
    this.id = id;
    this.fullname = `${firstname} ${lastname}`
}
const Person1 = new Person(1,'Smart','DnD');
const Person2 = new Person(2,'Guy','have');

console.log(Person1);
console.log(Person2);
console.log(Object.prototype.isPrototypeOf(Person1));
console.log(Object.prototype.isPrototypeOf(Person2));
console.log(Person.prototype.isPrototypeOf(Person1));

//3.create object with class
class Student{
    constructor(id, fn , ln){
        this.id = id;
        this.firstname = fn;
        this.lastname = ln;
    }
    getFullname(){
        return `${this.firstname} ${this.lastname}`
    }
}

//st1 object -> Student prototype ->Object prototype (ancestor)
const st1 = new Student(1, 'Pitch','Cher');
const st2 = new Student(2, 'Sa','mart');
console.log(st1);
console.log(st2);
console.log(st1.getFullname());
console.log(st2.getFullname());
console.log(Object.prototype.isPrototypeOf(st1));
console.log(Object.prototype.isPrototypeOf(st2));
console.log(Student.prototype.isPrototypeOf(st1));

const undergratSt1 = Object.create(st1);
console.log(undergratSt1);
console.log(undergratSt1.id);
undergratSt1.address = 'Bangkok, Thailand';
console.log(undergratSt1);
console.log(undergratSt1.firstname);
undergratSt1.project = 'Webapplication';
console.log(undergratSt1);

let circle={
    radian:2 ,
    // area: function(){
    //     return Math.pow(Math.PI,2);
    // }
    area(){
        return Math.PI * Math.pow(this.radian,2);
    },
    equals(compareCircle){
        return this.radian === compareCircle.radian;
    }
}

console.log(circle.area());
console.log(circle.radian);
console.log(circle.equals({radian :2}));
console.log(circle.equals({radian : 3}));

if(JSON.stringify(circle) === '{}') console.log('empty object');
else console.log('not empty object');
