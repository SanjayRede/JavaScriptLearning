var greet=("  Hey you are doing good, keep it up  ")
console.log(greet);

console.log("total length of string:",greet.length);
var resultTrim = greet.trim();
console.log( resultTrim, "spaces removed Length: ", resultTrim.length);
console.log("total number of extra spaces removed count:",(greet.length-resultTrim.length));
var greet=(resultTrim)
console.log("Very first character in the string is:", greet.charAt(0),"& Very last character in the string is:", greet.charAt(33));
var greet=(resultTrim)
var wordsIngreet =  greet.split(" ");
console.log("Total words in sentence string is: ", wordsIngreet.length);
var indexOf=greet.indexOf("good");
console.log("index of world 'good'is:", indexOf);
var greet=(resultTrim)
console.log("substring starting from index 22 is:", greet.substring(22));
console.log("slice starting from index 22 is:", greet.slice(22));

var greet=(resultTrim)
console.log("is string is ends with 'up'", greet.includes("up"));
console.log("is string is starts with 'Hey'", greet.includes("Hey"));