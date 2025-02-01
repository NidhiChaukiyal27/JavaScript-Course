//singleton - // object.create


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nidhi",
    "full name" : "Nidhi Chaukiyal",
    [mySym]: "mykey1",
    age: 20,
    location: "Delhi",
    email: "nidhi@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])

// console.log(typeof JsUser[mySym]) // string
// console.log(typeof mySym) //symbol

JsUser.email = "nidhi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "nidhi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




