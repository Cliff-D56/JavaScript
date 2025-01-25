// Class Method
class VehicleC {
    constructor({id, latitude, longitude}){ //Constructs objects with id, latitude, and longitude parameters
        this.id = id; // ID is set
        this.status = "unavailable"; // Property is added 
        this.setPosition({latitude, longitude}); /*Method is added AND USED thanks to the this keyword that references 
                                                setPosition() and calls with object in argument*/
    }
    setPosition({latitude,longitude}){ // Takes in earlier arguments 
        this.time = Date.now(); // Creates a Time Stamp
        this.longitude = longitude;
        this.latitude = latitude;
    }
    getPosition(){
       return {
           latitude: this.latitude,
           longitude: this.longitude
       };
   };
};
// Factory Method
let Vehicle = function(data){
    let{id,model,make} = data; //destructring assignment, Order ONLY matters based on declaration of properites. 
    this.model = model; //1
    this.make = make;   //2
    this.id = id;       //3
    this.setModel = function({model, make}) {
        this.time = Date.now();
        this.model = model;
        this.make = make;
    };
    
    this.getInfo = function() {
        return {
            id,
            model,
            make
        };
    }
}

let vehicle2 = new VehicleC({latitude:25,id:2,longitude:50})
let vehicle1 = new Vehicle({model:"AL1024",id:59.358615,make:17.947589});
// vehicle2.setPosition({longitude:59.367647,latitude: 18.213451});
// vehicle1.setModel({model:"clifford",make:"Gardner"})
// console.log(vehicle1);
// console.log(vehicle2);


let vehicle3 = new Vehicle({id: "AL1024", make: 59.367647, model: 18.213451});
let vehicle4 = new Vehicle({model: 18.213423, make: 59.367628, id: "AL1024"});
// console.log(vehicle3);
// console.log(vehicle4);

// Function Declaration
function namedFunction() { 
    console.log("I'm named, I hope ... ") 
};

// Function Expression
let anonymousFunction = function() {
    console.log("I'm a bit anonymous ...")
};
    
// Declaration of a function expression
let notExactlyAnonymousFunction = function anotherNamedFunction() {
    console.log("I'm confused ...")
};

// Class Expression, still a class not a variable
let AlmostEmptyClassE = class {
    constructor(sth) {
        console.log(sth);
    };
    
    sayHi() {
        console.log("Hi!")
    };
};
// Class Declaration
class AlmostEmptyClassD{
    constructor(sth){
        console.log(sth)
    }
};
let obj1 = new AlmostEmptyClassE("Hi")
let obj2 = new AlmostEmptyClassD("Hello")
// NO DIFFERENCE BETWEEN EITHER

obj1 instanceof AlmostEmptyClassD // False was made by E
obj2 instanceof AlmostEmptyClassD // True was made by D