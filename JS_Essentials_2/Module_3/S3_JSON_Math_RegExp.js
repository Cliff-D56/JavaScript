// JSON
{
    // How JSON looks *KEYS MUST BE IN DOUBLE QUOTES*
    let vehicleJSON = '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
    
    // PARSE: converts JSON to an object
    let vehicle = JSON.parse(vehicleJSON);

    // STRINGIFY: converts an object to JSON (string)
    let vehicleJSON2 = JSON.stringify(vehicle)
;}