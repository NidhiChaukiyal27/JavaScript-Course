//datatypes are of 2 types - primitive and non primitive
//how data is storing in memory - datatypes are based on memory allocation
//primitive datatypes - call by value 
// //7 types : string, number, boolean, null , undefined symbol, bigint --> stack memory

//js is a dynamically typed language or statically typed language? ---> dynamically typed language -->this means that you dont need to specify the data type of a variable when you declare it
const score =  100
const scoreValue =  100.3

const isLoggedIn =  false
const outsideTemp  = null
let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId); //false

const bigNumber = 3456782523748764774657585n






//reference (Non Primitive) --> call by reference --> heap memory
//Array, Objects , functions

const heros = ["shaktiman", "naagraj", "doga"]; //array
let myObj = {
    name: "nidhi",//object
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber); //bigint
// console.log(typeof scoreValue); //number
// console.log(typeof isLoggedIn); //boolean
// console.log(typeof outsideTemp); //object

// console.log(typeof myFunction); //function
// console.log(typeof heros); //object

// console.log(typeof anotherId); //symbol





//***************************** */


//stack(Primitive) , heap(non primitive)


let myName = "NidhiChaukiyal"

let anotherName = myName

anotherName = "NidhiPidhi"
console.log(myName)
console.log(anotherName)

let userOne = {
    email:"nidhi@google.com",
    upi:"nidhi@ybl"
}

let userTwo = userOne

userTwo.email = "nidhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);




