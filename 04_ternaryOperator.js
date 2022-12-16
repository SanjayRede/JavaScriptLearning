// If SSC marks greater than equal to 35 then pass or fail;


var sscMarks = 39;
var resultPassOrFail=sscMarks>=35 ? "pass": "fail";

console.log( `result is ${resultPassOrFail} `);


var sscResult= function(sscMarks){
    var resultPassOrFail=sscMarks>=35 && sscMarks<100 ? "pass": "fail";
return resultPassOrFail
}
var result=sscResult(39);
console.log(`result is 53 ${sscResult(53)}`);
console.log(`result is 83 ${sscResult(101)}`);
console.log(`result of 1000 ${sscResult(1000)}`);