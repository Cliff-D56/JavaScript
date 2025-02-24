// Composite Data Types

// Arrays
let array1 = [1,2,3]; //creates an empty array
let array2 = new Array(); //creates an empty array
let array3 = new Array(3); //creates an array with 3 empty slots

//Array Methods and Properties

// LENGTH: returns the length of the array
let lengthEx = array1.length; 

// returns the value at index 0
let index = array1[0]; 

// CONCAT: combines two arrays
let concatEX = array1.concat(array2); 

// PUSH: adds a value to the end of the array
let push = array1.push("value"); 

// POP: removes the last value from the array
let pop = array1.pop(); 

// SHIFT: removes the first value from the array
let shift = array1.shift(); 

// UNSHIFT: adds a value to the beginning of the array
let unshift = array1.unshift("value"); 

// SLICE: returns a portion of the array, starting at index 0 and ending at index 2 (not inclusive)
let slice = array1.slice(0, 2); 

// SPLICE: removes a portion of the array, modifies original, starting at index 0 and removing 2 values
let splice = array1.splice(0, 2); 

let spliceAdd = array1.splice(2, 0, 5); 
//removes a portion of the array and adds a value, starting at index 2 and removing 0 values

// DELETE: deletes the value at index 0 and leaves an empty slot
delete array1[0]; 
array1[0] = 0;

// SOME: returns true if at LEAST ONE value meets the condition
let some = array1.some((item)=>item==="1"); 

// EVERY: returns true if ALL values meet the condition
let every = array1.every((item)=>item==="1"); 

let filter = array1.filter((item)=>typeof item==="number"); //returns an array of values that meet the condition

let map = filter.map((item)=>item*2); //returns an array of values that have been modified based on the function (doubles the value)

let sort = array1.sort(); //sorts the array

let sortAsc = array1.sort((first,second)=>first-second); /*sorts the array in ascending order by going through each value 
and subtracting the second value from the first and the result is used to determine the order*/

let sortDesc = array1.sort((first,second)=>second-first); //sorts the array in descending order

let reduce = array1.reduce((accumulator,item)=>accumulator+item) /*reduces the array to a single value, 
accumulator is the value of each iteration with the item being the current item*/

let reduceInit = array1.reduce((accumulator,item)=>accumulator+item, 0) // the second parameter is the initial value of the accumulator

let reduceObj = array1.reduce((accumulator,item,index)=>{accumulator[index]=item; return accumulator;}, {}) // Accumulator is an empty object getting more field each iteration

let reverse = array1.reverse(); //reverses the array

let includes = array1.includes(1); //returns true if the array includes the value (1)

let indexOf = array1.indexOf(1); //returns the index of the value (1), or -1 if it doesn't exist

let lastIndexOf = array1.lastIndexOf(1); //returns the last index of the value (1), or -1 if it doesn't exist

let find = array1.find((item)=>item===1); //returns the first value that meets the condition

let findIndex = array1.findIndex((item)=>item===1); //returns the index of the first value that meets the condition


//Array Iteration
let forEachArrow = array1.forEach(// Must encapsulate entire function in parentheses
    (index,value, array)/* Parameters*/ => 
        //Code to be executed
        {console.log(value, index, array);}
); //iterates over each value in the array

let forEachArrowStreamlined = array1.forEach((item,index)=>console.log(item,index));

let forEachEX = array1.forEach(function(item,index){
    console.log(`At index ${index}`);
    console.log(`The value is ${item}`);
})

// Array Destruction and Spread Operator
let [item1,item2,,] = array1; //destructuring the array
let spread = ["new",...array1]; //spreads the array into a new array