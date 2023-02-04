var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var num1 = 29
var num2 = 23
var num3 = 111
if ( num1 > num2 && num1 > num3 ){
    console.log("number1 is greatest")
}else if ( num2 > num3 && num2 > num1 ){
    console.log("number2 is greatest")
}else if( num1 == num2 == num3 ){
    console.log("all numbers are equal")
}else {
    console.log("num3 is greatest")
}