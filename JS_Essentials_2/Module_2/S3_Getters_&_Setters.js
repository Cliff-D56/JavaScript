class Vehicle { 
    #longitude;
    #latitude;
    constructor({id, latitude, longitude}){ 
        this.id = id; 
        this.status = "unavailable"; 
    };
    
    set position({latitude, longitude}) { //Setter does the same thing as the setPosition() method
        this.time = Date.now(); 
        this.#longitude = longitude; 
        this.#latitude = latitude; 
    };
    
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.#longitude = longitude;
        this.#latitude = latitude;
    };
    
    get position() { // Getter 
        return { 
            latitude: this.#latitude, 
            longitude: this.#longitude 
        }; 
    };
        
    getPosition() {
        return {
            latitude: this.#latitude,
            longitude: this.#longitude
        };
    };
};


let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.position = {longitude: 18.193121, latitude: 59.378654};
console.log(vehicle.position) //returns properties without being called like function
vehicle.setPosition({longitude:5,latitude:5}) 
console.log(vehicle.getPosition()) 