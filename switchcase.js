var readlineSync = require('readline-sync');
console.log("**************************");
console.log("Area Calculator");
console.log("**************************");
console.log(" Press 1 for square\n\ Press 2 for circle \n\ Press 3 for rectangle \n\ Press 4 for triangle");
var symbol = readlineSync.questionInt("Enter your choice :")
switch(symbol){
 case 1 :
    var length = readlineSync.questionInt("enter side length : ")
    var area = length * length
    console.log(`Area is ${area}`);
    break;
 case 2 :
     var radius = readlineSync.questionInt("enter radius : ")
     var circleArea = 3.14 * (radius * radius)
     console.log(`Area is ${circleArea}`);
     break;
 case 3 :
     var length1 =  readlineSync.questionInt("enter rectangle length: ")
     var breadth =  readlineSync.questionInt("enter rectangle breadth: ")
     var rectangleArea = length1 * breadth
     console.log(`Area is ${rectangleArea}`);
     break;
 case 4 :
     var base = readlineSync.questionInt("enter base of the triangle: ")
     var height = readlineSync.questionInt("enter height of the traingle: ")
     var triangleArea = 0.5 * (base * height)
     console.log(`Area is ${triangleArea}` );
     break;
}





