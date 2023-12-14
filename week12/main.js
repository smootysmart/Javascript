const body = document.body;
const bodyChildNode = body.childNodes;
const bodyChildren = body.children;

// console.log(body);
// console.log(bodyChildNode);
// console.log(bodyChildren);

bodyChildNode.forEach((bcn) => console.log(bcn));

// Array.from(bodyChildren).forEach((bc) => console.log(bc));

// console.log(body.firstChild);
// console.log(body.firstElementChild);
// console.log(body.lastChild);
// console.log(body.lastElementChild);

// console.log(body.firstChild === body.firstElementChild);
// console.log(body.lastChild === body.lastElementChild);

// console.log(document.documentElement); //html Element node0
// console.log(document.firstElementChild); //html Element node
// console.log(document); //document node

// console.log(document.documentElement === document.firstElementChild);
// console.log(document.documentElement === document);

// const course201Element = document.getElementById("int201");
// console.log(course201Element);

// const course101El = document.querySelector("#int101", "#bscit.courses");
// console.log(course101El);

// const progCourses = document.querySelector("#programming");
// console.log("#programming");

// const proEle = document.querySelectorAll(".programming");
// console.log(proEle);
// const liEle1 = document.querySelectorAll("li");
// console.log(liEle1);
// const liEle2 = document.getElementsByTagName("li");
// console.log(liEle2);

// //find with class
// const trackClass = document.getElementsByClassName("courses");
// console.log(trackClass);

// const divLectElement = document.querySelector(".lecturers");
// //get <li> under div.lecturers
// const liDivLect = divLectElement.querySelectorAll("li");
// console.log(liDivLect);
// //get <li> under document node
// const allLi = document.querySelectorAll("li");
// console.log(allLi);

// const firstDiv = document.body.firstElementChild;
// console.log(firstDiv);
// const firstDivAttributes = firstDiv.attributes;
// console.log(firstDivAttributes);

// Array.from(firstDivAttributes).forEach((fdv) => {
//   console.log(fdv.name);
//   console.log(fdv.value);
// });

// console.log(firstDiv.getAttribute("id"));
// // return value of specified attribute 'id'
// console.log(firstDiv.getAttribute("class"));
// // return value of specified attribute 'name'
// const firstAtribute = firstDivAttributes[0];
// console.log(firstAtribute.ownerDocument);
// console.log(firstAtribute.ownerElement);
// //create a new attribute
// firstDiv.setAttribute("owner", "noppakrit");

// const newPEle = document.createElement("p");
// // newPEle.textContent = "Client Web Programming II";
// newPEle.innerHTML = '<span style="color:red"> Client Web Programming II</span>'
// newPEle.setAttribute("id", "int203");
// newPEle.setAttribute("class", "courses");
// const divParent = document.getElementById("bscit-courses");
// divParent.appendChild(newPEle);
