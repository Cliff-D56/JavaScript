// Iterators
{
    let almostIterable = {
        data: [10, 30, 60, 20, 90],
        iterator: function() { // is a iterable object
            let index = -1;
            let data = this.data;
            return { // returns this function when called
                next:function(){ // method call to increase index and get new info 
                    index++;
                    return{ // returns value to previous function that is returned to method
                        value: data.length === index ? undefined : data[index],
                        done: data.length === index
                    }
                }
            }
        }
    }
    let it = almostIterable.iterator(); // -> {next: ƒ}
    it.next(); // -> { value: 30, done: false }
    console.log(it.next())

    let SymbolIterator = {
        data: [10, 30, 60, 20, 90],
        [Symbol.iterator]() { // Symbol iterator that allows for of loop, Iterable Object
            let index = -1; // starting index 
            let data = this.data;
            return { 
                // Arrow function that defines next(), value is PREincremented by one with done asking if the current index is in the array
                next: () => ({ value: data[++index], done: !(index in data) })
            }
        }
    }
    for(let a of SymbolIterator){
        console.log(a)
    }
}

// Generators
{
    // needs * after function keyword
    function* testGenerator() {
        // interuptts execution, ALSO RETURNS value
        yield 10;
        yield 20;
        yield 30;
    }
        
    let gen = testGenerator();
    
    // Runs code
    gen.next() // -> {value: 10, done: false}
    gen.next() // -> {value: 20, done: false}
    gen.next() // -> {value: 30, done: false}
    gen.next() // -> {value: undefined, done: true}

    let iterable = {
        data: [10, 30, 60, 20, 90],
        [Symbol.iterator]: function* () {
            for(let element of this.data) {
                yield element;
            }
        }
    }
    let it = iterable[Symbol.iterator]();
    
    // Can be used in for of
    for(let a of iterable){
        console.log(a)
    }

    // And spread operator
    let array = [...iterable]

    // Doesn't NEED iterable object
    function* fibonacci(range = Infinity) {
        let lastButOne = 0, last = 1;
        console.log(`Yield ${lastButOne}`)
        yield lastButOne; // needs next to push through, returns lastButOne
        console.log(`Yield ${last}`)
        yield last; // returns last 
        // takes in argument and creates iterator for the range 
        for(let i=1; i<=range; i++) {
            let tmp = lastButOne + last;
            lastButOne = last;
            last = tmp;
            console.log(`Yield ${last}`)
            yield last; // returns last 
        }
    }
    // Placing an int in generator ONLY ALLOWS THAT MANY ELEMENTS if the range is specified or used in generator, otherwise it does nothing
    let fib = fibonacci(6);

    // Can be used with any of these 3, HOWEVER ITERATORS CAN ONLY GO THROUGH ONCE SO ONLY ONE WORKS
    console.log([...fib])
    console.log([fib.next()])
    for(let f of fib){
        console.log(f)
    }

    function* cities() {
        for(let city of ['London', 'Oslo', 'Berlin']) {
            yield city;
        }
    }
        
    function* test() {
        yield* cities(); // Makes cities iterator do the work
        yield 'Amsterdam' // no iterator needed
        yield* ['Madrid', 'Rome']; // makes different array iterator do the work
    }
}