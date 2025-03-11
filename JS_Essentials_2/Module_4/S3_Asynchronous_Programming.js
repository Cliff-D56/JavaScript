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

// Callback Functions
{
    
    const value = 200;

    let request = new XMLHttpRequest();
    
    //2 ways to set up function call on load, makes no difference

    //1st way, using onload:
    let responseLoaded = () => {
        if (request.status === 200) {
            const resp = JSON.parse(request.responseText);
            console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
        }
        }
        
    request.onload = responseLoaded;


    //2nd way using event listener
    request.addEventListener("load", () => { // addEventListener takes two arguements, an event and a function(Can be defined in or out of parameter)
    if (request.status === 200) {
        const resp = JSON.parse(request.responseText);
        console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    }
    });


    request.open('GET', `http://localhost:3000/json?value=${value}`);
    request.send();
    
    console.log(`browser: ${value} * ${value} = ${value * value}`);
}