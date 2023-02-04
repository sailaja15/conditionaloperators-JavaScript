
function randomArray(min , max){
    var arr = new Array(10)
    for(var i = 0 ; i <arr.length ; i++){

        var uniqueNotFound = true
        var randNum = Math.floor(Math.random() * (max - min + 1 )) + min

        while(uniqueNotFound){

            if(arr.includes(randNum)){
                randNum= Math.floor(Math.random() * (max - min + 1 )) + min
            } else {
                arr[i] = randNum
                uniqueNotFound = false
            }
        }
    }
    console.log(arr);
}

randomArray(10,45)