// var readlineSync = require('readline-sync');
// var num = readlineSync.questionInt("Enter your age: ")
// return (num >= 21) ? console.log("beer") : console.log("juice")
var readlineSync = require('readline-sync');
var num = readlineSync.questionInt("Enter your number:")
if(num % 3 == 0 && num % 5 == 0){
    console.log("this is a multiple of 3 and 5") 
}else if(num % 5 == 0){
    console.log("this is a multiple of 5")
}else if(num % 3 == 0){
    console.log("this is a multiple of 3")
}else {console.log ("this is not a multiple of 3 and 5")}