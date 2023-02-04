//Take an input, and tell if it is a perfect square or not
var readlineSync = require('readline-sync');
var perfectSquare = readlineSync.question("Enter a number:")
a = Math.sqrt(perfectSquare)
if(perfectSquare == a * a){
    console.log("The number is a perfect square")
}else{
    console.log("The number is not a perfect square")
}