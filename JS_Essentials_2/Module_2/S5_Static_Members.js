class Vehicle {
    constructor({id, latitude, longitude}){
        this.id = id;
        this.status = "unavailable";
        this.position = ({latitude, longitude});
    };
    
    set position({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    
    get position() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    
    static isSameId(v1, v2) { // In body defintion
        return v1.id === v2.id;
    };
};

Vehicle.isSamePostion =  function(v1, v2) { // After declaration since a class is an object
        return v1.position.latitude === v2.position.latitude && v1.position.longitude === v2.position.longitude;
};

let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
let vehicle2 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"});
let vehicle3 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"});

//How they're called

Vehicle.isSameId(vehicle1, vehicle2); // -> true
Vehicle.isSameId(vehicle1, vehicle3); // -> false
console.log(Vehicle.isSamePostion(vehicle1,vehicle2))