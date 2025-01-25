// Function Declaration
function walk(){
    console.log("Walking")
};
// Function Expression 
let move = function(){
    console.log("Moving")
};
// Argument object
function arguement(a,b){
    for(let arg of arguments){
        console.log(arg)
    }
    return a+b
};
// Callback Function
let numbers = [1, 2, 3, 4, 5];
function mainFunction(callback) {
  console.log("Performing operation...");
  // Asyncronus Function
  setTimeout(function(){
      numbers.forEach(callback);
  },5000)
}
function callbackFunction(number) {
  console.log("Result: " + number);
}
// Set Interval
function interval(){
    let intervalTime = 1000;
    setInterval(callbackFunc,intervalTime,5)
}
function callbackFunc(a){
    console.log(a)
}
// Clear Interval
function stopCounter(){
    setTimeout(function(){
        console.log("Clearing Interval")
        clearInterval(interval)
    },10000)
}
// Rest  operator
function sum(discount, ...prices){
    console.log(prices)
    // console.log(prices.reduce((accumulator,currentvalue)=>(accumulator+currentvalue)))
    return ((prices.reduce((a,b)=>(a+b))) * (1-discount))
}
// Default Parameters
function params(param1 =4 ,param2 = 5,param3=6){
    param1 = param1 || 1;
    param2 = param2 || 2;
    param3 = param3 || 3;
    console.log(param1)
    console.log(param2)
    console.log(param3)
}
// Getter and Setters
const person = {
    firstName: "Clifford",
    lastName: "Gardner",
    // Becomes a read only property
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    get age(){
        return 27;
    },
    // Can only be changed with this setter
    set fullName(value){
        const parts = value.split(" ");
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};

// Try Catch
function tryCatch(message){
    if(typeof message!=='string'){
        // Error is created and becomes an Exeception when thrown.
        throw new Error("Please enter a string");
    }
    console.log(message.toUpperCase())
}

// Seperate from the code above, this will TEST the function
try{
    tryCatch("Hello")
}
// Error is caught and this code is ran
catch(e){
    alert(e);
};

// This keyword 
const video = {
    title: 'a',
    tags:[1,2,3],
    showTags(){
        // Another way to access the title is by referencing the object in a variable 
        const self = this;
        this.tags.forEach(function(tag){
            console.log(tag)
            //Because the this keyword is in a regular function and not a method, it'll reference the window object
            console.log(this),
            console.log(this.title),
            console.log(self.title)
        },this /* HOWEVER thanks to the forEach method being able to allow a this keyword as an argument,
        the this keyword inside the function will reference the argument which references the object
        YOU CAN ALSO USE THE BIND METHOD TO BIND this keyword TO forEach function*/)
    },
    showTags1(){
        // Final way to change this is using a arrow function that uses the this keyword in the forEach init and overwrites 
        // the this keyword inside the arrow function so it will reference the first this keyword
        this.tags.forEach(tag =>{
            console.log(this.title,tag)
        })
    }
}

function playVideo(a,b){
    console.log(this)
}
playVideo.call({name: "Clifford"},1,2);
//Must be passed as array if multiple values
playVideo.apply({name: "Clifford"},[1,2]);

// Returns new function that points to the new object being passed, 
playVideo.bind({name: "Clifford"});
//so it must either be put in a variable and called 
const bind = playVideo.bind({name: "Clifford"});
bind();
//or called after object
playVideo.bind({name: "Clifford"})();

function sum(a,...b){
    let sum = 0
    for(let arg of arguments){
        Array.isArray(arg) ? arg = arg.reduce((a,b)=>(a+b)):
        typeof arg === 'object' ? arg = 0:
        sum+=arg;
    }
    return sum
}

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius
    }
}
function countOccurences(array,searchElement){
    if(!Array.isArray(array)){
        throw new Error("First Value not an Array");
    }
    let count =0;
    array.forEach(function(index){
        if(index === searchElement)
            count++
    })
    return count;
}
try{
    const numbers=[1,2,3,4];
    const count = countOccurences(numbers,1)
    console.log(count)
}
catch(e){
    console.error(e)
}
