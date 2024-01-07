/* let userName: string = "Shariar Islam";
// let age = 25

console.log(userName); */

const addNumber = (num1:number, num2:number = 0) => {
  console.log(num1 + num2);
};

addNumber(5, 10);
//tsc index.ts -> index.js -> node index.js
