const date = new Date(); //class banaayeu , new hami class banaauna use garxau
const month =["Jan","feb","march"];
console.log(month[date.getMonth()]); //we will get the current month using the method getmonth
date.setDate(16);
console.log(date.getDate());
const bday = new Date();
bday.setDate(14);
bday.setMonth(12);
bday.setFullYear(2024);
console.log(bday);

//digital clock 
 const elementHrs = document.getElementById("hours");
 const elementMin = document.getElementById("minutes");
 const elementSec = document.getElementById("seconds");
 const elementampm = document.getElementById("ampm");
 setInterval(function(){
 const date1 = new Date;
 let ampm= "AM"; //by default am raakhdai xau
 let hours = date.getHours();
 if(hours >11)
 {
    ampm="PM"; 
 }
 if(hours>12)
 {
   hours = hours-12;
 }
 elementHrs.innerText = hours;
 elementMin.innerText = date1.getMinutes();
 elementSec.innerText = date1.getSeconds();
 elementampm.innerText = ampm;
 },1000);