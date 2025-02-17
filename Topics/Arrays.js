//Array init
const test = [1,2,3,4,2,1,1,1]
const nums = [2,3,4,68,7,8,5,33];
const nums2 = [2,3];
const objs = [
    {id:1,value:'b'},
    {id:2,value:'a'}
]
//Add to end of array
nums.push(4)
//Add to start of array
nums.unshift(1);
//Add to middle of array usuing 3 parameters OR deletes indexs using 2 parameters
nums.splice(2,0,3)
//Checks for index of value and returns index position 
nums.indexOf(2.5)

// For Primitives, includes method works since it searches for values
console.log(nums.includes(2))
// However since objects are references it won't find the value but the reference point so it will return false
// @ts-ignore
console.log(objs.includes(1))
/*Which is why find is the method for objects since those objects are put into a function(Predicate) 
and the function finds the reference point's value*/
console.log(objs.find(function(element){
    return element.id === 2;
}))
//Same way to write the above code but using Arrow functions
console.log(objs.find(element=>element.id === 2));

//Different Ways same result
let concat = nums.concat(nums2)
let spread = [...nums,...nums2]

// forEach method that goes through each element

// Regular Function 
concat.forEach(function(index){
    console.log(index)
})
// Arrow Function
spread.forEach(index=>console.log(index))

// sort only works for primitives UNLESS you had a comparison function inside for references
console.log(objs.sort(function(a,b){
    a.value.toUpperCase();
    b.value.toUpperCase()
    return a.value>b.value?1:a.value<b.value?-1:0
}))

// every returns a boolean by testing every element
console.log(
    spread.every(function(value){
    return value >=0;
}))
// some returns a bool but will stop if one element meets criteria
console.log(
    spread.some(function(value){
        return value <=0;
    })
)

// Creates new array with values that match criteria
spread.filter(function(value){
    return value >=3;
});
// Arrow function version
spread.filter(value => value >=3);

// map method adds to each indiviual element then creates new array
spread.map(value => `<ul>${value}<ul>`)

// map can also return objects created by each element
spread.map(value => {
    return {value: value};
});
/* when created in this fashion requuires parentheisis around the new object 
so JS won't look at the object as if its a code block instead of an object defniner */
spread.map(n=>({value: n}))

//Finally these methods are chainable
let chain = spread
.filter(value => value >=3)
.map(n=>({value: n}))
.filter(obj =>obj.value ===3);

// will reduce array into single value REQUIRES RETURN STATEMENT
let reduce = spread.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue
})

function arrayFromRange(min,max){
    let array =[];
    for(let i=min;i<=max;i++){
        array.push(i)
    }
    return array;
}
function includes(arrays,searchElement){
    for(let element of arrays){
        if(searchElement === element){
            return true;
        };
    }
    return false;
}
function except(array,excluded){
    let newarray =[];
    array.forEach(index=>{
        let incuded = false;
        for (let element of excluded) {
            if(index===element){
               incuded = true;
               continue;
            }else{
                incuded = false;
            }
        }
        if(incuded==false){
            newarray.push(index)
        }
    })
    return newarray
}
// Teacher example
function except1(array,excluded){
    const output =[];
    console.log(array)
    for(let element of array){
        excluded.includes(element)?console.log(`${element} was Found in array`):output.push(element)
    }
    console.log(output)
}
// Permanently swaps indexes 
function move(array, index, offset){
    const newindex = offset+index;
    if(newindex>array.length){
        return console.error("Invalid Offset")
    }
    const removedindex = array.splice(index,1)[0]
    console.log(array)
    console.log(`Moving ${removedindex} to index ${newindex}`)
    array.splice(offset+index,0,removedindex);
    console.log(array)
}// Teacher example (Based on shifting)
function move1(array,index,offset){
    const newindex = offset+index;
    if(newindex>=array.length||newindex<0){
        return console.error("Invalid Offset")
    }
    const output = [...array];
    const removedindex = output.splice(index,1)[0]
    output.splice(newindex,0,removedindex);
    return output
}
function countOccurences(array,searchElement){
    let count =0;
    array.forEach(function(index){
        if(index === searchElement)
            count++
    })
    return count;
}
// Teacher example MAKE SURE TO RETURN
function countOccurences1(array,searchElement){
    return array.reduce((accumulator,current)=>{
        return accumulator += (current === searchElement)?1:0;
    })
};
function getMax(array){
    return array.reduce((accumulator,current)=>{
        return accumulator>current?accumulator:current;
    },array[0])
}
const movies=[
    {title : 'a',year:2018,rating:4.5},
    {title : 'b',year:2018,rating:4.7},
    {title : 'c',year:2018,rating:3},
    {title : 'd',year:2017,rating:4.5}
];
let filter = movies
.filter(function(value){
    return value.rating > 4 && value.year===2018;
})
// @ts-ignore
.sort((a,b )=>a-b)
.reverse()
.map(title => title.title) 
console.log(filter)
