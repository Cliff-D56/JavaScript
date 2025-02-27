// JSON
{
    // How JSON looks *KEYS MUST BE IN DOUBLE QUOTES*
    let vehicleJSON = '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
    
    // PARSE: converts JSON to an object
    let vehicle = JSON.parse(vehicleJSON);

    // STRINGIFY: converts an object to JSON (string)
    let vehicleJSON2 = JSON.stringify(vehicle)
;}
// Math
{
    // Math Methods
    let abs = Math.abs(-5); // returns the absolute value
    let ceil = Math.ceil(5.1); // rounds up
    let floor = Math.floor(5.9); // rounds down
    let round = Math.round(5.5); // rounds to the nearest whole number
    let max = Math.max(1,2,3,4,5); // returns the largest number
    let min = Math.min(1,2,3,4,5); // returns the smallest number
    let pow = Math.pow(2,3); // returns the base to the exponent
    let sqrt = Math.sqrt(25); // returns the square root

    let log = Math.log(10); // returns the natural logarithm
    let log2 = Math.log2(10); // returns the base 2 logarithm
    let log10 = Math.log10(10); // returns the base 10 logarithm

    // Can also do Trigonometry but only in radians

    
    let random = Math.random(); // returns a random number between 0 and 1
    let randomRange = Math.floor(Math.random()*10); // returns a random number between 0 and 10 (not inclusive)
    let randomRange2 = (min, max) =>{ // returns a random number between min and max (not inclusive)
        let _min = Math.ceil(min); // makes sure the min is rounded up for int values
        let _max = Math.floor(max); // makes sure the max is rounded down for int values
        //Ex: Math.random()*(10-5)+5 -> (Math.random = .6) * (max - min = 5) = 3 -> 3 + min = 8
        return Math.floor(Math.random()*(_max-_min)+_min)
    };
    let randomRange3 = (min, max) =>{ // returns a random number between min and max (inclusive)
        //Ex: Math.random()*(10-5)+5 -> (Math.random = .9) * (max - min + 1 = 6) = 5.4 -> 5.4 + min = 10.4
        return Math.floor(Math.random()*(max-min+1)+min)
    };
}