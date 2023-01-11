console.log(`With no argument and return value`);
let sentance = () =>{
    console.log("Good Morning, Today is Monday");
}
sentance();

console.log(`------------------------------------------------------------`);
console.log(`3 Argument and no rerurn value for this 3 Parameter perform multification`);
let number = (n1, n2, n3) =>{
console.log(n1*n2*n3);
}
console.log(`The multification of number 5, 5, 2:`); number(5, 5, 2);

console.log(`The multification of number 10, 4, 1:`); number(10, 4, 1);

console.log(`-----------------------------------------------------------`);
console.log(`Addtion of 5 Parameters and log on return value`);

let myNumber = (value1, value2, value3, value4, value5)=> {
    console.log( value1 + value2 + value3 + value4 + value5 );
}
console.log(`sum of 100, 100, 200, 349, 756:`); myNumber(100, 100, 200, 349, 756);
console.log(`addition of given string is:`);
myNumber("I am", " learning", " ES6", " features", " in depth" )