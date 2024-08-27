const accountId = 123;
var accountEmail = "Prajwal@gmail.com";
let accountPassword = "Bunny";
city = "Bengaluru";

 //accountId = 321; //Const value not be changed

 /* {
    var accountEmail = "Bunny.com";  
    var does not support scope, prefer not to use it.
 } */

    {
        let accountPassword = "prajwal"; // let have scope and values doesn't change outside scope;
        console.log(accountPassword);
    }

console.log(accountPassword);
