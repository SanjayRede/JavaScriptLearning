var sentence = "I am very good IT Developer";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
        char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
        // console.log(char);
        console.log("String is-I am very good IT Developer");
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is : ${counter}`);

console.log("-------------------------------------------------------");
var counter=0
function sum(num1,num2,num3) {
    var result1=num1*num2*num3
    console.log(`the cube  is  ${result1}`);
    counter=counter+sum;
}
console.log(`Total cube of sum is 225 `);
sum(1,1,1)
sum(2,2,2)
sum(3,3,3)
sum(4,4,4)
sum(5,5,5)



console.log("-------------------------------------------------------");



function oddPositionedChars(sentencechar) {
    var sentence = "Hard work always pays back";
    console.log(sentence);
    if (sentencechar% 2 == 0) {

    }
}

