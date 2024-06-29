//classes
//classes help in making object
class Product {
    constructor(title,amount,description) //method which gives the value to be set
    {
     this.title = title; //this.key = property
     this.amount = amount;
     this.details = description;
    }
}
const product1 = new Product("LED TV" , 12000, "HD display");
const product2 = new Product("Camera" , 80000, "80 px");
console.log(product1 , product2);
const product3 = {
    title : "Android",
    amount : 20000 ,
    details : "Slow"
}
console.log(product1  instanceof Product ); //helps to indenty wheather it is created from class or not
console.log(product3  instanceof Product); // it will be false

class shape {
    constructor (id,x,y){
        this.id =id;
        this.run= function(){ //jati choti obj banaauxau taeti choti yo function copy hunxa
            console.log("Hello"); // each obj will have each copies ani tya , multiple function vayera storage full hunxa
        }
    }
    //ranther than creating method inside the consturctor we can create the method outside constructor so that memory will be saved 
    //and each obj will get the reference of method with out having its own each copies
    move(x,y){
        this.x = x;
        this.y = y;
    }
}
const square = new shape("Square",5,5);
const rectangle = new shape("Rectangle",3,4);
//using dot we can access the meber of prototype outside the prototype
square.move(7,8); // here there will be value of x and y in square but not in reactange bcz the move function is not called
console.log(square,rectangle);

//another example is below

const students = [];
class student
{
    constructor(name, rollno)
    {
this.name= name;
this.roll=rollno;
this.attendance = [];
    }
markAttendence ()
{
    this.attendance.push(new Date()); //gives the date at which the student is added
}    
}
const student1= new student ("Harry",6);
student1.markAttendence(); //called method
students.push(student1);
console.log(students);


 //lets make a child class

 class monitor extends student{
    constructor(name, rollno) {
 super(name, rollno); //here child has all properties of parent but the new property added in child class are not in parent class
 this.canMonitor=[];
    }
    AddMonitor(skill)
    {
   this.canMonitor.push(skill);
    }

    static sayYourname(){  //static method which cannot access the object 
        console.log("Monitor");
    }
 }
 const Student2 = new monitor("david",56);
 Student2.AddMonitor("leadership");
 students.push(Student2);
 monitor.sayYourname(); //called the static method
 //child adopts the property of parent but not parent
