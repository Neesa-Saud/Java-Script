let para ;
para = document.getElementById("my-para"); //html maa hamley <p></p> vitra my para naam ko id banaako xau taesbaata data get garna we used the method getelementbyid
para.innerText= "kaam xaina timi haru ko"; //through js by this we can add things in html
let data = document.querySelector("p1"); //hamley id class banaaunau pardaina sidhai bracket vitra assigned data select garxa 
data.innerText = "k xa bhai haru" ; //added text through js in html
console.log(data);
let data1 = document.querySelector("p2");
data1.innerHTML = "<b> hello guys</b>"; //by this way we can add html too
console.log(data1);
setInterval(function(){
    para.style.display ="none"; // css use garyeu none vanaaley it will hide , after 1 sec that text will hide
},1000);
setInterval(function(){
   if(data.style.display==="none")//if tya khaali xa vanay tyo text daekhinay vayo ani tya txt xa vanay khaali hunay vayo aadha aadha sec maa , loop laagxa , jhyaap jhup garxa
   {
    data.style.display="block";
   }
   else{
    data.style.display="none";
   } 
},500);
let show = document.querySelector("body");
show.style.backgroundColor = "blue";
setInterval(function(){
    if(show.style.backgroundColor==="blue")
    {
    show.style.backgroundColor="green";
}
    else{
        show.style.backgroundColor="blue";
}},500);
