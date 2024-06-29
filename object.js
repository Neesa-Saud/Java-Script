let person1 = { //object
    naam : "Narad Saud" , //property
    eyecolour : "Brown",
    skinTone : "fair",
    mobileNo : 9746482636,
    talk : function (sentence )
    {console.log(sentence + this.naam); // yaesma pass garayko parameter sanga naam ko vue concat hunay vayo      
    },
    speech : function (sentence) //yaesa argument pass vayo
    {
        console.log(sentence); //yaesmaa j parameter call huda pass hunxa tyo print hunay vayo
    }
};
console.log(person1);
person1.speech("Hello Mr Narad");
person1.talk("Hello k xa "); //method call garna lae object lae point garnu parxa object name ley 


let person2 = {
    naam : "Smith Saud" ,
    eyecolour : "Brown",
    skinTone : "fair",
    mobileNo : 9848629893,
    talk : function (sentence )
    {console.log(sentence + this.naam); // yaesma pass garayko parameter sanga naam ko vue concat hunay vayo      
    },
    speech : function (sentence) //yaesa argument pass vayo
    {
        console.log(sentence); //yaesmaa j parameter call huda pass hunxa tyo print hunay vayo
    }
};
console.log(person1);
person2.talk("Hello k xa "); // data maa vaako farak farak naam sanga kura garna sakeeyo
let persons = [person1 ,person2]; //array of object
console.log(persons);

function information(name,eyecolour,skinTone,mobileno)
{
    name = name,
    eyecolour = eyecolour,
    skinTone = skinTone,
    mobileno = mobileno
};
let data = [information("nisa","brown" ,"fair", 9865822386,), information("bhumika","brown","fair",986735676)];
console.log(data);

function info()
{
    return {
    name : prompt("Enter your name"),
    hobby : prompt("Enter your hobby")
}
};
let data2=[info];
console.log(data2);


function student1() //function banyo let students = [];//created array
{ let students = [];//created array
    let std = {   //object banyo
    name :  prompt ("Enter name of student "),
   grade : prompt ("Enter your grade"),
   fatherName : prompt ("Enter your fathers name")
};
students.push(std); //object ko value array vitra push garxa
console.log(students);
localstorage.setItem("name", "Nisha"); //it stores name vannay key and the given string in localstorage
};

//now the below one stores the object  in local storage and the object is added back inthe array by converting it into initial form
let PreviousStudent = localstorage.getItem("student2"); // certain variable maa local storgae maaa store vaako data raakhiyo  
let student2 = PreviousStudent ? JSON.parse(PreviousStudent):[]; //now condition checked  reload hudaa yaedi previous student maa kunai value xa vanay tyo lae array maaa raakhdinay natra empty array raakhnay                                
function Getstudent() //function banyo
{ let std = {   //object banyo
    name :  prompt ("Enter name of student "),
   grade : prompt ("Enter your grade"),
   fatherName : prompt ("Enter your fathers name")
};
student2.push(std); //object ko value array vitra push garxa
console.log(student2);
let stringify = JSON.stringify(student2);//pura object string maa convet vayo
localStorage.setItem("student2",stringify); //value lae localstorage maa haalyo
};