const score = 400
// console.log(score); //400


const balance = new Number(100)
// console.log(balance); //100

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00

// const otherNumber = 23.8966  // toPrecision(3) ---> 23.9
// const otherNumber = 123.8966 // toPrecision(3)----> 124

// const otherNumber = 1123.8966 //  toPrecision(3)----->1.12e+3


// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In')); // 10,00,000



/******************************Maths ********************* */

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); //4
// console.log(Math.abs(4)); // 4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.2)); //4

// console.log(Math.min(4,3,9,1,5)); // 1
// console.log(Math.max(4,3,9,1,5)); // 9


// console.log(Math.random()); //0-1 bich mei hogi
// console.log((Math.random()*10) + 1); // 1-10
// console.log(Math.floor(Math.random()*10) + 1); // 1-10 integers


const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - max + 1)) + min)





