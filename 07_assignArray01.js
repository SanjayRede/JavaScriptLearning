const fruitSeasonal = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
console.log(`Givan Array is: "${fruitSeasonal}"`);
console.log(fruitSeasonal);

console.log(`-------------first and last element of given array-------------`);
let firstElement = fruitSeasonal[0];
let lastElement = fruitSeasonal[fruitSeasonal.length-1];
console.log(`The first Element of array is: "${firstElement}"`);
console.log(`The Last element of array is: "${lastElement}"`);

console.log(`-------------Add "papaya" before "banana" of given array-------------`);
var fruitSeason = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
console.log(fruitSeason);
fruitSeason.unshift("papaya")
console.log(fruitSeason);

console.log(`-------------delete "mango" from array-------------`);
var fruitSeason=["papaya","Banana", "Orange", "Apple", "Mango", "Watermelon"]
console.log(fruitSeason);
let spliceRes = fruitSeason.splice(4,1);
console.log(`after deleting result is :${spliceRes}`);
console.log(fruitSeason);

console.log(`-------------Add "pineaple"at the end of array-------------`);
var fruitSeason=["papaya","Banana", "Orange", "Apple", "Watermelon"]
console.log(fruitSeason);
fruitSeason.push("pineapple") 
console.log(fruitSeason);

console.log(`------------inserting "dragon fruit" before "water melon" of given array-------------`);
var fruitSeason=["papaya","Banana", "Orange", "Apple", "Watermelon","pineapple"]
console.log(fruitSeason);
let splice = fruitSeason.splice(4, 0, "Dragon Fruit");
console.log(fruitSeason);

console.log(`------------replacing "orange" with "kiwi" of array-------------`);
var fruitSeason=["papaya","Banana", "Orange", "Apple", "Watermelon","pineapple"]
console.log(fruitSeason);
let spliceres =fruitSeason.splice(2,1,"kiwi")
console.log(fruitSeason);

console.log(`------------log elements starting from index 1to 4 -------------`);
var fruitSeason=["papaya","Banana", "kiwi", "Apple", "Watermelon","pineapple"]
console.log(fruitSeason);
let slice= fruitSeason.slice(1,5)
console.log(slice);

console.log(`------------select last three elements-------------`);
var fruitSeason=["papaya","Banana", "kiwi", "Apple", "Watermelon","pineapple"]
console.log(fruitSeason);
let totalElements = fruitSeason.length;
// console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);
let lastelement=fruitSeason.slice (fruitSeason.length-3)
console.log(lastelement);
