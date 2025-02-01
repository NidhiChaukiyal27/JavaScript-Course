function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("D");
    console.log("H");
    console.log("I");
}

// sayMyName()


// function addTwoNumbers(num1, num2){  // parameters
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){  // parameters
    let result = num1 + num2
    return result
}
const result = addTwoNumbers(3,4) // arguments
// console.log("Results: ", result);

function loginUserMessage(username = "student"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged In`
}
// console.log(loginUserMessage("Nidhi"))

function calculateCartPrice(val1, val2, ...num1){ // rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,600,5000))

const user = {
    username : "Nidhi",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,400,100,600]));


