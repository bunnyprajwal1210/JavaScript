const name = "bunny"
const age = 100

// console.log(name +" " +repoCount);

// console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('prajwal')

// console.log(gameName[0]);   //p
// console.log(gameName.__proto__);


// console.log(gameName.length);  //7
// console.log(gameName.toUpperCase());  //PRAJWAL
// console.log(gameName.charAt(2));  //a
// console.log(gameName.indexOf('j'));  //3

const newString = gameName.substring(0, 4)  //praj
//console.log(newString);

const anotherString = gameName.slice(-7, 1)
// console.log(anotherString);

const newStringOne = "   bunny    "
// console.log(newStringOne);   //     bunny    
// console.log(newStringOne.trim());     //bunny   //trims the empty space

const url = "https://www.linkedin.com/in/prajwal121001/"

// console.log(url.replace('com', 'www'))  //"https://www.linkedin.www/in/prajwal121001/"

// console.log(url.includes('bunny'))  //false
// console.log(url.includes('prajwal'))   //true

// console.log(url.split('/'));  // 'https:', '', 'www.linkedin.com', 'in', 'prajwal121001', '' ]