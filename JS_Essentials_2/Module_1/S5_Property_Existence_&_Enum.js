// To test whether or not a property exists, an *in* test can be used
let obj = {
    "New Property" : "value",
    prop : "v1"
}
console.log("prop" in obj)

// Another way is using a conditional
if(obj.prop){
    console.log(obj.prop)
}

// To enumerate the properies for...in can be used
for(prps in obj){
    console.log(`Property ${prps}`)
    console.log(`Value ${obj[prps]}`)
}

// To get an Array of propery names, Object.keys() is used
console.log(Object.keys(obj))