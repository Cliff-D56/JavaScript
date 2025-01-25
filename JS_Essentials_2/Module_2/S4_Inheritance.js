class Vehicle { 
    #longitude;
    #latitude;
    constructor({id, latitude, longitude}){ 
        this.id = id; 
        this.status = "unavailable"; 
    };
    
    set position({latitude, longitude}) { 
        this.time = Date.now(); 
        this.#longitude = longitude; 
        this.#latitude = latitude; 
    };
    get position() { 
        return { 
            latitude: this.#latitude, 
            longitude: this.#longitude 
        }; 
    };
};
class Bus extends Vehicle {
    constructor({seats, id, latitude, longitude}) {
        super({id, latitude, longitude});
        this.seats = seats;
    }
    }
let bus = new Bus({seats: 40, longitude: 18.213423, latitude: 59.367628, id: "AL1024"});  
// console.log(bus.seats); // -> 40
// console.log(bus.id); // -> ! undefined

class AlmostEmptyClass { 
    constructor(sth) { 
        // console.log(sth); 
    }; 
    sayHi() { 
        console.log("Hi!") 
    }; 
    }; 
    
class ExtendedClass extends AlmostEmptyClass {
    constructor(name) {
        super() // Can be empty but must be declared before this can be accessed
        this.name = name;
    };
    sayHi() { 
        console.log(`Hi ${this.name}!`); // Overwrites old sayHi()
    };
    newHi() { 
        this.sayHi(); // References new sayHi() with this keyword
    }
    oldHi() {
        super.sayHi(); // References old sayHi() with super keyword
    };
};
    
let obj = new ExtendedClass("Bob"); // -> I’m super ...
obj.sayHi();    // -> Hi Bob!
obj.newHi();    // -> Hi Bob!
obj.oldHi();    // Hi!