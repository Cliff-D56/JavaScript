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
    // const value = 200;

    // let request = new XMLHttpRequest();
    
    // //2 ways to set up function call on load, makes no difference

    // //1st way, using onload:
    // let responseLoaded = () => {
    //     if (request.status === 200) {
    //         const resp = JSON.parse(request.responseText);
    //         console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    //     }
    //     }
        
    // request.onload = responseLoaded;


    // //2nd way using event listener
    // request.addEventListener("load", () => { // addEventListener takes two arguements, an event and a function(Can be defined in or out of parameter)
    // if (request.status === 200) {
    //     const resp = JSON.parse(request.responseText);
    //     console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    // }
    // });


    // request.open('GET', `http://localhost:3000/json?value=${value}`);
    // request.send();
    
    // console.log(`browser: ${value} * ${value} = ${value * value}`);
}

// Promises
{
    // Body of Promise
    let p = new Promise((resolve, reject) => { // Creates Promise with resolve(success) and reject(error) are parameters
        let value = Math.floor(Math.random() * 4);
        if (value === 0) { 
            reject(new Error('!!!')); // Immediately throws Error
        } else {
            setTimeout(() => {
                resolve(value);
            }, value * 1000);
        }
    });

    let handleResolved = function (value) {
        console.log(value);
    }
        
    let handleRejected = function (error) {
        console.log(`Error: ${error.message}`);
    }
    
    // Handles Both
    p.then(handleResolved, handleRejected);
    
    // Runs ONLY when fulfilled
    p.then(handleResolved)
    
    // Runs ONLY when errors
    p.then(null,handleRejected)
    p.catch(handleRejected)

    // Runs when state changes from pending
    p.finally(()=>{console.log("Finally")})

    console.log('end');
    
    
    let test = new Promise (function(resolve, reject) {
        setTimeout(() => resolve('Papa'), 1000);
    });
    
    test.finally(() => console.log('promise is settled')).then(v => console.log(`HI ${v}`), e => console.log(e));

    let promises = [
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(4), 1000);
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(3), 7000);
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(2), 5000);
        }),
    ];
    // Waits for ALL promises to be completed
    Promise.all(promises).then(()=>{console.log("Resolve")}).catch(()=>{console.log("Rejected")})

    // Waits for ANY to be completed, if error occurs then it goes on to next promise, if all fail generates Aggregate error
    Promise.any(promises)
    .then(p => console.log(`any: first resolved ${p}`));

    // Waits for FIRST to be completed, if error is first then error is called
    Promise.race(promises)
    .then(p => console.log(`race: first resolved ${p}`));
}

// Async/Await
{
    // Standard Promise
    function newPromise(){
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve("Result"), 3000);
        });
    }

    // Asynchronous function, to deal with possible errors use try and catch blocks
    async function testAsync() {
        try{
            console.log('testAsync start');
            // WAITS until Promise is completed (fulfilled)
            let resp = await newPromise();
            console.log(resp);
            console.log('testAsync end');
        }catch(error){ // Error is caught when promise becomes rejected status 
            console.log(`error: ${error.message}`);
        }
    }

    console.log('before testAsync ...');
    testAsync();
    console.log('... after testAsync');
}