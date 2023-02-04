// count the occurences of the word "is" in the sentence 
//this is the capital of india which is in asia which is in earth
var str = "this is the capital of india which is in asia which is in earth"
var splitWords = str.split("is")
console.log(splitWords)
var count = str.split("is").length-1;
console.log(count);