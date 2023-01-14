console.log("1.functions without argument no return");
function ilove() {
  console.log("i love java script");
  console.log("i am angular develolper");
}
ilove();

console.log("2.functions with argument no return");

function personalDetails(firstName, lastName, collegeName) {
  console.log(firstName);
  console.log(lastName);
  console.log(collegeName);
}
personalDetails(
  "Sanjay",
  "Rede",
  "Skn sinhgad college of engineering korti pandharpur"
);

console.log("3.Swapping function");
function swapValuesDude(value1,value2) {
    console.log("before swap ");
    console.log(value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("after swap");
    console.log(value1,value2);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude( 1000,2000);

console.log("4.function with arguments &return");
function addThreeValues(value1,value2,value3) {
    console.log(value1+value2+value3);
    return addThreeValues;
 }
 addThreeValues(10.23,600,40)
 addThreeValues("Hello", "good", "morning")



function values(num1,num2) {
  // console.log(num1+num2);
  var sum= num1+num2;
  console.log(sum);
}
values(10,12);
values(10,32);

function values(num1,num2) {
  var sum= num1+num2;
  return sum;
};
var myValue=values(10,12);
console.log(myValue);
// values(10,32);
function name(params) {
}




