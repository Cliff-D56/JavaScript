// Creating Objects
let obj = {
    property: "value"
}
let ob3 = new Object;

// 2 ways to add properties: 

// 1: When creating the object 
let obj2 = {
    property: "value",
    newproperty: "value1"
}
// 2: Using dot notation
obj2.brandnewproperty = "value2";
// 3: Using Bracket notation
obj2["Hello"] = "new value";

for(let prop in obj2){
    console.log(prop,obj2[prop])
}