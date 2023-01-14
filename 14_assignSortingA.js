console.log(`Given array is`);
const arrayRollNumber=[113,45,56,11,32,45,109,799,56,45]
console.log(arrayRollNumber);
console.log(``);

console.log(`1)reverse array is`);
arrayRollNumber.reverse()
console.log(arrayRollNumber);
console.log(``);

console.log(`2)use sort without any custum logic`);
arrayRollNumber.sort()
console.log(arrayRollNumber);
console.log(``);

console.log(`3)sort the array in ascending order by using custum logic`);
arrayRollNumber.sort((a, b)=>{
    return a>b ? 1 : -1;
 });
console.log(arrayRollNumber);
console.log(``);

console.log(`4)find greatest number from the array`);
console.log(arrayRollNumber);
let greatorNumber=arrayRollNumber[arrayRollNumber.length-1]
console.log(`the greatest number from the array is: ${greatorNumber}`);
console.log(``);

console.log(`5)find smallest number from the array`);
console.log(arrayRollNumber);
let smallestNumber=arrayRollNumber[0]
console.log(`the smallest number from the array is: ${smallestNumber}`);
console.log(``);

console.log(`6)remove the duplicate number from the array`);
console.log(arrayRollNumber);
let duplicateNumber= new Set(arrayRollNumber);
console.log(duplicateNumber);

