// Factory Functions - Should be in Camel Notation
function createCircle(radius,location=0){
    return {
        radius,
        location,
        draw(){
            console.log(radius)
        }
    }
}

const circle1 = createCircle(1);
const circle2 = createCircle(3);


// Constructor Functions - Should be in Pascal Notation
function Circle(radius){
    this.radius = radius;
    this.length = 4;
    this.draw = function(){
        console.log(this.radius)
    }
}

const Circle1 = new Function('radius',`    
    this.radius = radius;
    this.length = 4;
    this.draw = function(){
        console.log(this.radius)
    }`);

const circle3 = new Circle1(5)
const circle = new Circle(1)

const another = {...circle3,color:"yellow"}

const address = {
    street:'street',
    city:'city',
    zipcode:444
}
let post = {
    title: `Hidden in Black Ice`,
    body: `A story about Soul Weavers`,
    author: 
    `Darkness 
    
    Blade`,
    views:10000,
    comments:[
        {author:`Hi`,body:`Its an awesome book`},
        {author:`Hi2`,body:`It2s2 2a2n awesome book`}
    ],
    isLive:true
}
function createPost(title,body,author){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments =[],
    this.isLive = false;
}
function showAddress(address){
    console.log(`${address.street} ${address.city}, ${address.zipcode}`);
    for(let key in address)
        console.log(address[key]);
}
function createFactoryAddress(street,city,zipcode){
    return {
        street,
        city,
        zipcode};
}
function CreateAddress(street,city,zipcode){
    this.street = street,
    this.city = city,
    this.zipcode = zipcode;
}
function areEqual(address1,address2){
    for(let key in address1){
        return(address1[key]===address2[key])
}
}
function areSame(address1,address2){
    return address1 === address2
}
let address1 = createFactoryAddress(1,2,3);
let address2 = new CreateAddress(1,2,3);
let address3 = address1;
let post2 = createPost("A","N","C")