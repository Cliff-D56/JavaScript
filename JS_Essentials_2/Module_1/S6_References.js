// const Objects can be modified in the way the values can change but not the reference path
const obj = {}

obj.prop = "value"
obj.prop2 = "v2"

// Objects are NOT the same even with the same values, they are ONLY equal when they have the same reference path
const equalObj = obj
const notEqualObj = {
    prop:"value"
}
console.log(obj == equalObj)
console.log(obj == notEqualObj)

// To copy the contents of an object to another there are a few ways

// 1: Object.assign()

Object.assign(notEqualObj,obj,{x:1})
console.log(notEqualObj)

// 2: spread operator *Can also add additonal properties
const obj2 = {...obj,x:3,y:4}
console.log(obj2)

// To create an entirely new object with a nested object with a different reference point a custom function must be used.
function copy(obj){
    let newObj ={...obj} // Creates an empty object
    for(prop in newObj){ // Cycles through properties
        if(typeof newObj[prop] == "object"){ // Checks if any properties are objects
            newObj[prop] = copy(newObj[prop]) // If any are then it assigns that object to a new object with a different ref point
        }
    }
    return newObj;
}