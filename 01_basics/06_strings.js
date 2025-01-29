// const name = "Nidhi" ----->string declaration
// const repoCount = 50

// console.log(name + repoCount + " Value");  // not a good way

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation


// another method to declare a string
const gameName = new String ('NidhiChaukiyal')
// console.log(typeof gameName); // object
// console.log(gameName[0]); //N
// console.log(gameName.__proto__);// {}
// console.log(gameName.length); //14
// console.log(gameName.toUpperCase()); //NIDHICHAUKIYAL
// console.log(gameName.charAt()); //N
// console.log(gameName.charAt(5));  //C
// console.log(gameName.indexOf('y')); //11


// const newString = gameName.substring(0,4);
// console.log(newString);

// const anotherString = gameName.slice(-14,8);
// console.log(anotherString);


const newStringOne = " Nidhi   "
console.log(newStringOne);
console.log(newStringOne.trim()); 

/*********PLEASE READ ABOUT EVERY TOPIC ON MDN *********************/


const url = "https://nidi.com/nidhi%20chaukiyal"

console.log(url.replace('%20', '-'))

console.log(url.includes('chaukiyal'))

console.log(gameName.split('-'));



// Go on browser console read all the functions take help from mdn 

//strings requires practice

