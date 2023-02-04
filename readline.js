var readlineSync = require('readline-sync');
var day = readlineSync.question("Enter your number:")
switch(day){
      case "0" :
        console.log("sunday")
        break;
        case "7" :
        console.log("sunday")
        break;
        case "1" :
        console.log("monday")
        break;
        case "2" :
        console.log("tuesday")
        break;
        case "3" :
        console.log("wednesday")
        break;
        case "4" :
        console.log("thursday")
        break;
        case "5" :
        console.log("friday")
        break;
        case "6" :
        console.log("saturday")
        break;
        case "default" :
            console.log ("invalid input")
}
 