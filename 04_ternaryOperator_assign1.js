var num1=10
var num2=-10
var result= num1>num2 ? "10":"-10";

console.log( `greater value from 10&-10  is ${result} `);

// var greatervalue= function (value) {
// //     value=num1>num2 && num1<num2? "greator":"smaller";
// }
// var result=greatervalue

var num1=800
var num2=899
var result= num1>num2 ? "800":"899";

console.log( `greater value from 800 & 899  is ${result} `);

console.log("---------------------------------------------------------------------");
var isEvenOrOdd= function(value) {
    value%2==0 ? "Even":"Odd";
    var result=value%2==0 ? "Even":"Odd";
    return result
}
isEvenOrOdd(34)
console.log(`34 is even or odd, the result is=${isEvenOrOdd(29)}`);
console.log(`44 is even or odd, the result is=${isEvenOrOdd(44)}`);
console.log(`0 is even or odd, the result is=${isEvenOrOdd(0)}`);
console.log(`101 is even or odd, the result is=${isEvenOrOdd(101)}`);

console.log("---------------------------------------------------------------------");
var greet=("JavaScript")
console.log("string length in JavaScript is=", greet.length);
console.log(`string length in JavaScript is even or odd, the result is=${isEvenOrOdd(greet.length)}`);

var greet=("Developer")
console.log("string length in Developer is=", greet.length);
console.log(`string length in Developer is even or odd, the result is=${isEvenOrOdd(greet.length)}`);

var greet=("Google")
console.log("string length in Google is=", greet.length);
console.log(`string length in Google is even or odd, the result is=${isEvenOrOdd(greet.length)}`);