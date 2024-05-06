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

// let age = +prompt("enter your age")

// if(age >= 18){
//     console.log("you can vote");
// }

// else{
//     console.log("you cannot vote");
// }

//  let Dates = new Date();
// // console.log(Dates.toString());
// // console.log(Dates.toDateString());
// // console.log(Dates.toLocaleDateString());
// // console.log(Dates.toLocaleTimeString());
// console.log(typeof Dates);

// let myDate = new Date(2023, 0, 16);
// console.log(myDate.toDateString());

// let Time = Date.now();
// console.log(Math.floor(Time/1000));

// let newDate = new Date();
// console.log(newDate.getSeconds());

// let myTime1 = dateFns.format(new Date(2024, 3, 20, 13, 45, 30), "MM/dd/yyy HH:mm:ss");

// let myTime2 = dateFns.format(new Date(2024, 3, 20, 13, 45), "E dd/M/yyy HH.mm");

// let myTime3 = dateFns.format(new Date(2024, 3, 20, 3, 45), "yyy-MM-dd H:mm EEEE");

// let myTime4 = dateFns.format(new Date(2024, 3, 20, 13, 45, 30), "MMMM do, yyy hh.mm.ss a");

// let myTime5 = dateFns.format(new Date(2024, 3, 20, 13, 45), "dd MMMM yyy 'at' hh:mm a");

// console.log(myTime1);
// console.log(myTime2);
// console.log(myTime3);
// console.log(myTime4);
// console.log(myTime5);

//functions

// function add(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }

// const result = add(5, 5);

// function login(username) {
//    return `${username} login hai`;
// }

// console.log(login("kaif"));

// function calculatePrize(...num1) {
//   return num1;
// }

// console.log(calculatePrize(567, 56, 343, 23, 534, 234));

const isAnagram = function (s, t) {
  if (s.length === t.length) {
    return false;
  }

  const sletters = {};

  for(let char of s){
    if(!sletters[char]){
        sletters[char] = 1
    }
    else{
        sletters[char]++
    }
  }
};



















const check = (s) => {
    let l = 0;
    let r = s.length - 1;
    while (l <= r){
        if (s[l] === s[r]) {
            l++;
            r--;
        }

        else {
            return false;
        }

    }

    return true
}



let isPalindrome = function (s) {
    const regex = /[^a-zA-Z]/g
    const clean = s.replace(regex, '').toLowerCase()
    return check(clean)
};
  