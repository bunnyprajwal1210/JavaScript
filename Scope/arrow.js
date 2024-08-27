// const user={
//     name : "Bunny",
//     price : 999,

//     welcomeMessage : function() {
//         console.log(`${this.name}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()

// console.log(this);  //{}

// function chai(){
//     let username = "bunny"
//     console.log(this.username);  
// }

// chai()  //undefined

// const chai = function () {
//     let username = "bunny"
//     console.log(this.username);
// }

// chai();  //undefined

// const chai =  () => {
//     let username = "bunny"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

//implicit method
// const addTwo = (num1, num2) => ({username: "bunny"})


//explicit method
// const addTwo = (num1, num2) => {
//    return {username: "bunny"}
// }

// console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()