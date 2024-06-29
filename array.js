let students =["Ashutosh","Sapana","Bhawana"];
let ShouldIadd = prompt("Can more names be added ???(yes/no)");
if(ShouldIadd === "yes")
{
 students.push("Sunil"); // push ley array maa data enter gar dinxa , means add gardinxa
}
console.log(students.splice(2,2,"Bishal"));//2nd value daekhi 2 value delete hunxan ani tyo thau maa bishal add hunxa
console.log(students.length); //gives the length of array
console.log(students.pop());// last ko value delete
console.log(students.shift()); //first value delete
console.log(students.unshift("Priya")); //first vanda agaadi value add

let arr = [1,2,3,4,5,6];
 arr.forEach( function (val , index){
    console.log(val,index);
    
}); //gives the value and index of all elements of array line by line , loop laaunxa array ko value ko according

let Newarr = arr.filter(function (value) //gives the type of value from the array we want
{
 if(value % 2 !== 0)
 {
    return true;
 }
 else {
    return false;
 }
});
console.log(Newarr);
let Sorted = arr.sort(function(a,b)
{
if(a>b)
{
    return 1;
}
else{
    return -1;
}
}
);
console.log(Sorted);

let Total = arr.reduce(function (previous,current)  //array ko total value patta laauna help garxa
{
    return previous +current;
},0);
console.log(Total); 