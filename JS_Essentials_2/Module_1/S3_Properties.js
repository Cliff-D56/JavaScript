// Properties can be of any type 
let sampleObject = {
    id: 10, 
    delay: 20,
    name: "en to tre",
    isPresent: true,
    delay: 50
};


// Objects can have Objects as properties which have their own properties
let obj = {
    object : {
        property : "value"
    }
}


// To access those properties you have to go through both objects
console.log(obj.object.property)


// Objects can have functions which are called Methods inside them
let obj2 = {
    prop:"v1",
    hi: function(){
        // To access the original objects properties, need to use *this* keyword
        console.log(this.prop)
        return this.prop
    }
}
obj2.hi()


// To modify properties, use Dot Notation or Bracket Notation

// Dot Notation:
obj2.prop = "Hi"
// Bracket Notation:
obj2['prop'] = "Clifford"


// To delete properties can be done in the same way

// Dot Notation:
delete obj2.prop
// Bracket Notation:
delete obj2['hi']
