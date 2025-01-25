// Class 
class TestClass { 
    constructor(arg) {
        this.arg = arg;
        console.log(this.arg);
    }; 
    
    showSth() { 
        console.log("I'm prototyped!");
    };
    
    static showSth() { 
        console.log(`Hi, I'm static!`);
    };  
}; 

let test = new TestClass("Hello");
test.showSth(); // -> I'm prototyped!
TestClass.showSth(); // -> I'm static!

console.log(test instanceof TestClass);

// Constructor Function, requires prototype 
let Test2 = function(arg) { 
    this.arg = arg;
    console.log(this.arg);
}; 
    

Test2.prototype.showSth = function() { 
    console.log("I'm prototyped!");
};
    
Test2.showSth = function() { 
    console.log(`Hi, I'm static!`);
};  


let test2 = new Test2("Hello");
test2.showSth(); // -> I'm prototyped!
Test2.showSth(); // -> I'm static!

console.log(test instanceof Test);

let Test3 = function(arg) { 
    this.arg = arg;
    this.showSth = function() { 
        console.log("I'm prototyped!");
    };
    console.log(this.arg);
}; 
        
Test3.showSth = function() { // To add a static method after a declaration
    console.log(`Hi, I'm static!`);
};