// Composite Data Types

// Arrays
{
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

    let find = array1.find((item)=>item===5); //returns the first value that meets the condition
    console.log(array1 + ""+find)
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
}
// Sets
{
    let set1 = new Set(); //creates an empty set
    let set2 = new Set([1,2,3]); //creates a set with values, unordered and unique

    // Set Methods and Properties

    // ADD: adds a value to the set
    let add = set1.add(1); 

    // DELETE: removes a value from the set
    let del = set1.delete(1); 

    // CLEAR: removes all values from the set
    let clear = set1.clear(); 

    // HAS: returns true if the set includes the value
    let has = set1.has(1); 

    // SIZE: returns the size of the set
    let size = set1.size; 

    // SET ITERATION
    
    // FOREACH: iterates over each value in the set
    let forEach = set1.forEach((item)=>console.log(item)); //iterates over each value in the set
    
    // VALUES: returns an iterator of the values in the set
    let values = set2.values(); //returns an iterator of the values in the set, which then gives access to next 
    let next = values.next().value; //returns the first value in the set
    let done = values.next(); 
    done.done; //returns true if the iterator has reached the end of the set

    // Set Destruction and Spread Operator
    let [item1,item2] = set2; //destructuring the set into sepeatete variables
    let spread = [...set2]; //spreads the set into a new array
}
// Maps
{
   let map1 = new Map(); //creates an empty map
   let map2 = new Map([[1,"one"],[2,"two"]]); //creates a map with key-value pairs 

   // Map Methods and Properties
   let has = map2.has(1); //returns true if the map includes the key (1)
   let get = map2.get(1); //returns the value of the key (1)
   map2.set(3,"three"); //adds a key-value pair to the map
   map2.delete(1); //removes a key-value pair from the map, based on the key
   map2.clear(); //removes all key-value pairs from the map
   let size = map2.size; //returns the size of the map

    // MAP ITERATION
    map2.forEach((key,value)=>console.log(key,value)); //iterates over each key-value pair in the map
    
    // ALL iterators use the next().value method to access the values as well as the done property to check if the iterator has reached the end of the map
    let mapValue = map2.values(); //returns an iterator of the values in the map
    let mapKey = map2.keys(); //returns an iterator of the keys in the map
    let mapEntry = map2.entries(); //returns an iterator of the key-value pairs in the map

    // Map Destruction and Spread Operator
    let [pair1,pair2] = map2; //destructuring the map into separate variables that are arrays
    let spread = [...map2]; //spreads the map into a new array
}
// To loop through any collections the for of loop can be used
let collection1 = [1,2,3,4,5];
let collection2 = new Set([1,2,3,4,5]);
let collection3 = new Map([[1,"one"],[2,"two"],[3,"three"],[4,"four"],[5,"five"]]); //requires an index for loop

// To check for the type of collection use the instanceof operator
for(let item of collection3){
    if (collection1 instanceof Map){
        console.log(item[0], item[1]);
    }
    else{
        console.log(item);
    }
}

// Objects can be used as collections as well, the biggest difference is that objects are not iterable and require a for in loop
let object = {a:1,b:2,c:3,d:4,e:5};
for(let key in object){
    console.log(key);
    console.log(object[key]);
}