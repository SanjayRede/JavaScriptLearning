var greet=("Js the most popular language")
console.log("given string is:", greet);
var lengthTotal=greet.length


console.log("total character is the string is", greet.length);
console.log("character at the index 6", greet.charAt(6));
console.log("character at the index 11", greet.charAt(11));
console.log("character at the index last", greet.charAt(lengthTotal-1));
console.log("Very first character in the string is", greet.charAt(0));
var squre= function(lengthTotal) {
    console.log("squre of given string lenght is=", lengthTotal*lengthTotal);
}
squre(28);

console.log("======== concat() ==========");
var firstName = "Sanjay";
var lastName = "Rede";
// Concatenation using + operator 
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);
var result = firstName.concat(" Chandrakant " ,lastName);
console.log("Concatenation using concat(): ", result);

var greet = "Good Morning";
var indexOf = greet.indexOf("M");
console.log("Index of character M: ", indexOf);

var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin: ", indexOfNin);

console.log( greet.replace("Mor", "Eve"));

console.log("To upper case", greet.toUpperCase());
console.log("To lower case", greet.toLowerCase());

var greet = "    Good Morning     ";
 console.log("Length ", greet.length);
 var resultTrim = greet.trim();
  console.log( "trim()", resultTrim, "Length: ", resultTrim.length);

console.log("Include() ",greet.includes("Good"));

var greet = "Good Morning";
var resultSlice = greet.slice(0, 4);
console.log("Slice method", resultSlice);

console.log( "slice() with start index ",greet.slice(4));

console.log("slice with negative start index: ", greet.slice(-7));
console.log("slice with negative start and end index: ", greet.slice(-7, -2));

var studList = "Dips|Jenny|Ganni|Manni|Shani";
var studListSplit = studList.split("|");
console.log(" Student list after split by char", studListSplit);
console.log("Total number students: ", studListSplit.length);

var studList = "Dips|Jenny|Ganni|Manni|Shani";
var studListSplit = studList.split("|");
console.log(" Student list after split by char ,", studListSplit);
console.log("Total number students: ", studListSplit.length);

var sentence = "Yes you can do it guys, just keep learning and practising as well";
var wordsInSentence =  sentence.split(" ");
console.log("Total words in sentence string is: ", wordsInSentence.length);

