
// var countCharA=" I AM Learning javaScript,The Language of internet"
// var counter=0
// for (let index = 0; index < countCharA.length; index++) {
//     var count = countCharA.length[index];
//     if (count=='a' || count=='A') {
//         console.log(count);
//         counter = counter +1;
//     }
// }
// console.log(`Total a&A in string is : ${counter}`);
console.log("-----------------------------------------------");
console.log("1.I AM Learning javaScript,The Language of internet");
var sentence = "I AM Learning javaScript,The Language of internet";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='A') {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total number of "a" or "A" in string is : ${counter}`);


console.log("-----------------------------------------------");
console.log("2.My favorite movie is LAggAn");
var sentence = "My favorite movie is LAggAn";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='A') {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total number of "a" or "A" in string is : ${counter}`);