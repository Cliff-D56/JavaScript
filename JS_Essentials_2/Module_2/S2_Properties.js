class VehicleE {

    constructor({id, latitude, longitude}){
        this.id = id;
        this.status = "unavailable";
        this.setPosition({latitude, longitude});
    };
    
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    
    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    };
class VehicleB {
    status = "unavailable"; //Public Property
    #longitude; //Private Property
    #latitude; //Denoted by the #
        
    constructor({id, latitude, longitude}){
        this.id = id;
        this.setPosition({latitude, longitude});
    };
        
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.#longitude = longitude;
        this.#latitude = latitude;
    };
        
    getPosition() {
        return {
            latitude: this.#latitude,
            longitude: this.#longitude
        };
    };
};
let vehicle1 = new VehicleB({id:2,latitude:25,longitude:25})
console.log(vehicle1.getPosition())