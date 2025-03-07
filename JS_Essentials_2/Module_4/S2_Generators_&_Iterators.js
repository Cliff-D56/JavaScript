// Iterators
{
    let almostIterable = {
        data: [10, 30, 60, 20, 90],
        iterator: function() { // is a method 
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
    it.next(); // -> {value: undefined, done: false}

    let SymbolIterator = {
        data: [10, 30, 60, 20, 90],
        [Symbol.iterator]() { // Symbol iterator that allows for of loop
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

}