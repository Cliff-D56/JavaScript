// The *this* keyword references the current owning object
const obj = {
    x:1,
    hi:function(){
        console.log(this)
    }
}

// In nested objects, this will only go up on level
const obj2 = {
    x:1,
    nest:{
        hi:function(){
            console.log(this)
        }
    }
}
obj.hi()
obj2.nest.hi()

// Getters and Setters help access and change properties