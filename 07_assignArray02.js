const arrayNumbers= [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`-------------the array of numbers is------------ :`);
console.log(arrayNumbers);
let totalLength = arrayNumbers.length;
console.log( `The total lenght of provided array is : ${totalLength}`);
console.log(``);

console.log(`-----------First and last element of given array is--------------`);
console.log(`First element of given array is: ${arrayNumbers[0]}`);
console.log(`Last element of given array is: ${arrayNumbers[totalLength-1]}`);

console.log(``);
console.log(`-------------third last element of array-------------`);
let thirdLast = arrayNumbers[totalLength - 3];
console.log(`The Third last element of given array is: ${thirdLast}`);

console.log(``);
console.log(`-----------all even numbers of array----------`);
let evenNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 == 0) {
    evenNumArray = evenNumArray.concat(element);
  }
}
console.log(`The even number of given array is: ${evenNumArray}`);

console.log(``);
console.log(`-----------all odd numbers of array----------`);
let oddNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element %2!= 0) {
    oddNumArray = oddNumArray.concat(element);
  }
}
console.log(`The odd number of given array is :${oddNumArray}`);

console.log(``);
console.log(`--------------even positioned array numbers------------`);
var pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(`The even position of given array is : ${pos}`);

console.log(``);
console.log(`----------odd positioned array numbers-----------`);
var pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 != 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(`The odd position of given array is :${pos}`);

console.log(``);
console.log(`--------sum of all elements------------`);
let sumOfElements = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  sumOfElements = sumOfElements + element;
}
console.log(`The sum of total element is: ${sumOfElements}`);

console.log(``);
console.log(`------------finding number multiple of 5-------------`);
let multiple = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    multiple = multiple.concat(element);
  }
}
console.log(`The values are multiply by 5 is : ${multiple}`);

console.log(``);
console.log(`---------find number 115---------`);
let numAvailable = arrayNumbers.includes(115);
console.log(`The number of 115 available in provided array: ${numAvailable}`);

console.log(``);
console.log(`----------find number 23---------`);
let isAvailable = arrayNumbers.includes(23);
console.log(`The number of 23 available in provided array: ${isAvailable}`);

console.log(``);
console.log(`----------inserting number-----------`);
arrayNumbers.splice(3,0,55,66);
console.log(`after inserting  55, 66 before index 3`);
console.log(arrayNumbers);

console.log(``);
console.log(`-----------deleting 3 elements-----------`);
arrayNumbers.splice(4,3);
console.log(`Deleted starting 3 element in provided array`)
console.log(arrayNumbers);