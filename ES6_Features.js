//Arrow function

function add ( x, y) //normal function
{
    return x+y ;
}

 const  add1 = (x,y) => {  //arrow function
    return x +y ;
 }
 const multiply =(x,y) => x*y ; //no need of curly braces when it has only one line amd return

 console.log(add(2,3));
 console.log(multiply(2,3));
 console.log(add1(2,4));

 const obj ={
    name : "Nisha",
    print : function(){
    setTimeout(function()
{
    console.log(then.name); //no value will bw printed bcz scope of inside function changed cant access other values out of it
},1000)
    } 
 }

 const obj1 ={
    name : "Nisaaa",
    print : function(){
    setTimeout(() =>
{
    console.log(then.name); //value is printed as we used arrow function and it does not change the scope
},1000)
    } 
 }
 
 function printAll (x,y, ...z){ //rest parameters (only 3 dots is necessary)
 console.log(x,y,z);
 }
 printAll(2,3,4,5,6,7,8);

 //short keys for obj
 const Lastname = "Green";
 const Firstname = "Joseph";
 const obj2 = {
    Lastname,
     Firstname,     
 }
 console.log(obj);

 const userFirstname = obj.Firstname;//to access obj
 console.log(userFirstname);

//short key for array
const arr = ["Smith","Saud"];
const [firstname,lastname] = arr; //can access both values
console.log(lastname);
const [,lastName] = arr; //to access only 2nd value
//making big bracket is enough

//Spread operators
const newarr = [...arr,"Nisha","Saud"] //copies the value from above array first and then other data
 const newobj = {
    ...obj2 , // we get previous obj here
    address : "Dhangadhi"
 }
 console.log(newobj);
 