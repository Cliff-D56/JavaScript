// To extend an object use the prototype
Array.prototype.getRandomItem = function(){
    return Math.floor(Math.random()*this.length)
}// All arrays will have access to method
let hi = [13,255,4]
console.log(hi[hi.getRandomItem()])