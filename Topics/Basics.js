let a = "red";
let b = "blue";

let space = a;
a = b ;
b = space;

function max(x,y){
    return x > y ? x : y;
}
function isLandscape(width,height){
    return width > height;
}
function Fizzbuzz1(x){
    for(i=1;i<x;i++){
        i % 15===0?console.log("FizzBuzz"):i%5===0?console.log("Buzz"):i%3===0?console.log("Fizz"):console.log(i);  
    }
}
function FizzBuzz2(x){
    typeof x !=="number"?console.log(NaN):
    x % 5===0 && x % 3===0 && x!==0 ? console.log("FizzBuzz"):
    x % 5===0 ? console.log("Buzz"):
    x % 3===0 ? console.log("Fizz"):
    console.log(x);  
}
function checkSpeed(x){
    const speedlimit = 70;
    const kmPerPoint = 5;
    let over = x <= speedlimit+kmPerPoint?console.log("Ok"):x-speedlimit;
    let points=0;
    while(over>0){
        if(over-kmPerPoint>0){
            points++;
            over-=kmPerPoint
        }else{
            points >= 12?console.log("Liscense suspended"):console.log("Points: "+points);
            break
        }
    }
}
function showNumbers(x){
    for(i=0;i<x;i++){
        console.log(i%2===0?i+' Even':i+" Odd");
    }
}
function countTruthy(x){
    let count = 0;
    for(let index of x){
        if(index){
            count++
        }
    }
    console.log(count)
}
function showProperties(x){
    for(let key in x)
        console.log(key, x[key]);    
}
function sum(x){
    let sum = 0;
    for(i=1;i<=x;i++)i%3===0?sum+=i:i%5===0?sum+=i:i=i;
    console.log(sum)
}
function calculateGrade(x){
    let avg = 0
    for(let index of x){
        avg +=index;
    }
    avg/=x.length;
    return avg<60?'F':avg<70?'D':avg<80?'C':avg<90?'B':'A';
}
function showStars(x){
    for(i=1;i<=x;i++){
        let pattern='';
        for(a=0;a<i;a++){
            pattern+="*";
        }
        console.log(pattern)
    }
}
function showPrimes(x){
    for(i=2;i<=x;i++){
        if(isPrime(i))console.log(i)
    }
    function isPrime(i){
        for(a=2;a<i;a++){
            if(i%a===0){
                return false;
            }
            return true;
    }
}
}
let time = new Date().getHours();
time < 12 && time > 5 ? console.log("Good Morning"):time<=14? console.log("Good Afternoon"): console.log("Good Evening");