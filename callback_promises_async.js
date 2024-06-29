//callbacks
function RunAftersec(cb){ //passed a parameter
    setTimeout(function() {
    console.log("hello hello");  
    cb();  
    }, 5000); //5 sec paxi yo execute hunay vayo 
};
function runafterExecute()
{
    console.log("sanchai xau");
};
RunAftersec(runafterExecute); //passed a functon as an argument
console.log("Time taking");

//promises
function timeConsuming(val){
    return new Promise( function(resolve)
    {
        setTimeout(function()
        {
            let data = 5 + val ;
            resolve(data);
        },2000)
    })
};
timeConsuming(5).then(function(data){
    console.log(data);
});
//async await
function timeTaking(val){
    return new Promise( function(resolve)
    {
        setTimeout(function()
        {
            let data1 = 2 + val ;
            resolve(data1);
        },3000)
    })
};
(async function(){  //rather than using then we can also simply use async/await
    const data1= await timeTaking(5);
    console.log(data1);
})(); //needed to be called over here