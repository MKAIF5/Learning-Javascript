// console.log("KAIF");
// console.log(10 + 10 + 10);

// let a = +prompt("Enter value 1");
// let b = +prompt("Enter value 2");
// let plus = a + b;
// console.log(plus);

//const location = [];
// console.log(Math.floor(Math.random() * 100));
// let a = "i am a \"web\" develpor"
// console.log(a);
// Data Types
// let str = "Hello"; //string
// let nr = 7; //number
// let bigNr = 12345678901234n; //bigint
// let bool = true; //boolean
// let sym = Symbol("unique"); //symbol
// let undef = undefined; //undefined
// let unknown = null; //null

// let str1 = "Hi";
// let nr3 = 3;
// let result2add = str1 + nr3;
// let result2min = str1 - nr3;
// let result2mul = str1 * nr3;
// let result2div = str1 / nr3;
// console.log(result2add);
// console.log(result2min);
// console.log(result2mul);
// console.log(result2div);

// let myButtonElement = document.querySelector("#myButton");
// let myInput = document.querySelector("#myInput");

// myButtonElement.addEventListener("click", () => {
//   console.log(myInput.value);

//   if (myInput.value > 25) {
//     console.log("garmi");
//   } else {
//     console.log("sardi");
//   }

// });

// let a = prompt("enter your age")
// if(a >=18 && a <=20){
//   console.log("true");
// }

// else{
//   console.log("false");
// }

// index of array
// let a = [10, 20, 56, 45, 45, 234, 76, 45654, 6767];
// console.log(a);
// a.push(586)
// console.log(a);
// a.pop()
// console.log(a);
//for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let userInp = +prompt("enter your table");
// let line = prompt("enter table line")
// for (i = 1; i <= line; i++) {
//   console.log(userInp + "x" + line + "=" + userInp*i);
// }

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i
// }
// console.log(sum);

// let inputForm = document.querySelector("#tableForm");
// let input = document.querySelector("#inputID");
// let table = document.querySelector(".time-table");

// // https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// // https://developer.mozilla.org/en-US/docs/Web/Events
// // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// inputForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let tableOf = input.value;

//   table.innerHTML = "";

//   for (let i = 1; i <= 12; i++) {
//        console.log(tableOf + " x " + i + " =", tableOf * i);
//     const message = `${tableOf} X ${i} = ${tableOf * i}`;

//     table.innerHTML += `${message} <br>`;
//   }
// });

// navigator.clipboard.writeText("Chandio");
// navigator.clipboard
//   .readText()
//   .then(
//     (clipText) => (document.querySelector(".editor").innerText += clipText)
//   );

// practice


// block scope
// {
//   let a = 10;
// }

// {
//   let a = 5;
// }
