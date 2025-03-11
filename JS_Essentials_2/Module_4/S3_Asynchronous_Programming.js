// Asynchronous Functions
{
    // Synchronous function, have to finish one before starting another.
    let function1 = function(fn){
        console.log("Start")
        fn()
    }
    let function2 = function(){
        console.log("End")
    }
    
    // Asynchronous functions, are functions that happen at their own pace regardless of others
    let afunc1 = function(message,time){
        let fn = function(){console.log(message)}
        setTimeout(fn,time)
    }

    afunc1("Started before the Synchronous function but ended after, no function needs to wait for this one to finish",3000)
    function1(function2)
}