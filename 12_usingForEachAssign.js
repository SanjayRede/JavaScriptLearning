const arrayNumber = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(``);
console.log(`The given array is ${arrayNumber}`);
console.log(``);
console.log(`1)Log the array element and its index using for each loop`);
console.log(``);
arrayNumber.forEach(function (currentValue, index, array) {
  console.log(`The value is : ${currentValue} and the index is : ${index}`);
});
console.log(`----------------------------------------------------------`);

console.log(`2)The positive values of given array `);
let positiveValue = [];
arrayNumber.forEach((currentValue) => {
  if (currentValue > 0) {
    positiveValue.push(currentValue);
  }
});
console.log(positiveValue);

console.log(`-----------------------------------------------------------`);
console.log(`3)The negative values of given array `);
let negativeValue = [];
arrayNumber.forEach((currentValue) => {
  if (currentValue < 0) {
    negativeValue.push(currentValue);
  }
});
console.log(negativeValue);

console.log(`----------------------------------------------------------------`);
console.log(`4)Find the even number of given array`);

let evenNumber = [];
arrayNumber.forEach((currentValue) => {
  if (currentValue % 2 == 0) {
    evenNumber.push(currentValue);
  }
});
console.log(evenNumber);

console.log(`------------------------------------------------------------`);
console.log(`5)The sum of total element of given array`);
let sum = 0;
arrayNumber.forEach((currentValue) => {
  sum = sum + currentValue;
  return sum;
});
console.log(`sum of all the values in array is=`, sum);

console.log(`--------------------------------------------------------------`);
console.log(`6)find even positioned values of given array`);
let evenpositionedvalue = [];
arrayNumber.forEach((currentValue, index) => {
  if (index % 2 == 0) {
    evenpositionedvalue.push(currentValue);
  }
});
console.log(evenpositionedvalue);
