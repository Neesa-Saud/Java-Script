let number = prompt("Enter your favourite number"); // adding + at first then it will only accept number
console.log(num+2); // as number is accepted thats why 2 willbe added

let num7 = prompt ("Enter your another favourite number"); //always take string
console.log(num7 +5); //concatination happens

 console.log(5==="5");//tripple equals to checks type also 

 console.log(5=="5");//double equals to checks only value also 
 
 let userNum = prompt("Enter any number"); // takes only number
 if(userNum<7)
 {
    console.log("true" );
 }
 else{
    console.log("false")
 }
 
 for (let i =1 ;i<=10 ;i++)
 {
   document.write("Narad ");
 }

 //Day 4
 function display ()
 {
   console.log("hello students");
 }
 display();

 function memo (studentName)   //parameter
 {
   console.log("hello" + studentName);
 }
  let net = memo( "Ashutosh");  //argument

  function sum(no1,no2)
  {
    return no1 + no2;
  }
  let result = sum(4,5);
console.log(result);

function print(data , times) //recursion
{
  if (times >0)  //condition most be given in recursion
  {
  console.log(data,times);
  print(data,times -1);
  }
}
console.log(print("hello",6));
function facto (digit)
{
  if(digit >1)
  {
    return digit* facto(digit-1);
  }
  return 1;
}
console.log(facto (4));
function two(nut)
{
 return function()
 {
  console.log(nut);
 } 
}
let Innerfunction = two(9);
Innerfunction();
function subtract(dsg)
{
 return function (gen) //anonymous function
 {
  console.log(dsg+gen);
 } 
}
let ans = subtract(8); //variable maa anonymousa function ko valuae aayera basyo
ans(4); //as returned value is function so this variable can call that function inside the function

