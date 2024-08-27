// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Prajwal",
    "full name": " Prajwal R",
    [mySym]: "mykey1",
    age: 18,
    location: "Bengaluru",
    email: "bunny@google.com",
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//  changing key values in  objects
JsUser.email = "bunny@chatgpt.com"
// console.log(JsUser["email"])  

//freezed object key values can not be changed
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser["email"])   //bunny@chatgpt.com

JsUser.greeting = function(){
    console.log("Hello");
}
JsUser.greetingTwo = function(){
    console.log(`Hello, ${this["full name"]}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());