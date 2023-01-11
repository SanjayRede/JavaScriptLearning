console.log(`------------------------bank details 1&2--------------------------`);
function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode
 }
 Bank.prototype.openTime = "9AM IST";
 Bank.prototype.closeTime = "6PM IST";
 let bank1 = new Bank("SBI Bank"," Mumbai","SBI000045","9696");
 let bank2 = new Bank("Mah Bank"," solapur","MHB000055","6666");
 let bank3 = new Bank("AXIS Bank"," Thane","AXS000077","1009");
 let bank4 = new Bank("YES Bank"," pune","YES000065","4485");
 console.log("Bank details is:","Bank Name:", bank1.bankName, ",Loaction:", bank1.location,",ifsc code:",  bank1.ifscCode,",Branchcode:", bank1.branchCode);
 console.log("Bank details is:","Bank Name:", bank2.bankName, ",Loaction:", bank2.location,",ifsc code:",  bank2.ifscCode,",Branchcode:", bank2.branchCode);
 console.log("Bank details is:","Bank Name:", bank3.bankName, ",Loaction:", bank3.location,",ifsc code:",  bank3.ifscCode,",Branchcode:", bank3.branchCode);
 console.log("Bank details is:","Bank Name:", bank4.bankName, ",Loaction:", bank4.location,",ifsc code:",  bank4.ifscCode,",Branchcode:", bank4.branchCode);
console.log(`---------------------step3&4---------------------------`);
 console.log(bank1.openTime);
console.log(bank1.closeTime);
console.log(`------------------------step 5--------------------------`);
console.log("SBI bank open time is:",bank1.openTime,",SBI bank close time is", bank1.closeTime );
console.log(`------------------------step 6--------------------------`);
console.log("closing time for :","Bank Name:", bank3.bankName, "close time is", bank3.closeTime );
console.log(`------------------------step 7--------------------------`);
console.log("for bank:",bank4.bankName,"the branch code is:", bank4.branchCode,"and the open time is:",bank4.openTime);

 
//  let time= new time(9)
//  console.log(time);