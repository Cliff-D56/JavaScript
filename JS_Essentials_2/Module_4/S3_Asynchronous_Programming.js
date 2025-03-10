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
    function1(function2)
}