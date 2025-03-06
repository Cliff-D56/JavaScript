// Extended Parameter Handling
{
    // Default Parameters

    // Requires some kind of name or will be undefined
    function sayHi(name){ 
        console.log(`Hi ${name}`)
    }

    // Default name will be Edward unless otherwise specified
    function sayHello(name="Edward"){
        console.log(`Hello ${name}`)
    }


    // Rest Parameter
    
    // Allows any number of arguments to be put into function then take the input as an array
    function rest(...args){
        args.forEach((arg)=>{
            console.log(`The number of args is: ${args.length}. The arg value at index: ${args.indexOf(arg)} is ${arg}`)
        })
    }

    // Arguments can be divided if need be
    function rest2(firstArg, secondArg, ...args){
        console.log(`This is the first arg: ${firstArg} and this is the second arg: ${secondArg}`);
        args.forEach((arg)=>{
            console.log(`The remaining number of args is: ${args.length}. The arg value at index: ${args.indexOf(arg)} is ${arg}`)
        })
    }


    // Spread Operator

    let spreadArray = ["Clifford","Norris","Gardner"]
    // ...spreadArray will split the array into 3 separate entries 
    function spread(firstname,middlename,lastname){
        console.log(`${firstname}, ${middlename}, ${lastname}`)
    }


    // Closures

    // Globally available variable allows function to access it anywhere
    let closure = 10;
    function close(){
        return ++closure
    }

    // In Scope varibles only allow access to variables in that scope (IE it will be 10 every function call)
    function Closure(){
        let closure = 10;
        return ++closure;
    }

    // To keep variables in appropiate scope AND return correct values use:
    function CLOSURE(){
        let closure = 10;
        return function(){
            return ++closure
        }
    }

    // Can also return methods that will remain private but can be used
    function closureObj(){
        function increment(num){
            return ++num;
        };
        return {
            x:10,
            y:10,
            incrementX: function(){
                this.x = increment(this.x);
            },
            incrementY: function(){
                this.y = increment(this.y);
            }
        };
    };


    // IIFE 

    // Keeps variables local and likely keeps code from being accessed by end user.
    (function(param){
        console.log(param)
    }("arg"));


    // Forwarding calls 

    
}