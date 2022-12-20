function monthOfYear(monthNumber) 
{
switch (monthNumber) 
{
  case 1:
    console.log(`1:this is januvary month`);
    break;
  case 2:
    console.log(`2nd:this is februvary month`);
    break;
  case 3:
    console.log(`3:this is march month`);
    break;
  case 4:
    console.log(`4:this is april month`);
    break;
  case 5:
    console.log(`5th:this is may month`);
    break;
  case 6:
    console.log(`6:this is june month`);
    break;
  case 7:
    console.log(`7:this is july month`);
    break;
  case 8:
    console.log(`8:this is August month`);
    break;
  case 9:
    console.log(`9:this is september month`);
    break;
  case 10:
    console.log(`10:this is Octomber month`);
    break;
  case 11:
    console.log(`11:this is November month`);
    break;
  case 12:
    console.log(`12th:this is December month`);
    break;
  default:
    console.log(`please enter valid month number`);
    break;
}
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
