// Takes in Choice
let numChoice = prompt("Type in a number: ");

// Checks if choice is a number
while(isNaN(numChoice)){
    numChoice = prompt("Please use an actual number");
};

// Starting byte size
let byteSize = 1;

function converter(number){
    let binary=[];
    let array = [];
    let bits = byteSize*8;
    let bitSum = 0;
    // Creates bit array
    for (i =0;i<bits;i++){
        array.push(2**i)
    };
    bitSum = array.reduce((x,y)=>{return x+y});
    
    // Readability variables
    let placeHolder = bitSum.toString().length;
    let nplaceHolder = numChoice.length;
    let numStringChoice= numChoice;
    
    // Subtracts bits from number choice
    for(i=0;i<array.length;i++){
        // If more than one byte, adds space in between for readability
        if(i%4===0&&i!==0){
            binary.push(" ")
        };
        // Current bit
        let currentBit = array.length - (i+1);
        let currentValue = array[currentBit];
        // Subtracts current bit value from number choice and populates a 1 or 0 for binary conversion
        number>=currentValue?(number-=currentValue,binary.push(1)):binary.push(0); 
    };

    // Adding Commas for readability
    while(placeHolder > 3){
        bitSum= bitSum.toString().slice(0,placeHolder-3)+","+bitSum.toString().slice(placeHolder-3);
        placeHolder-=3;
    };
    while(nplaceHolder > 3){
        numStringChoice= numStringChoice.slice(0,nplaceHolder-3)+","+numStringChoice.slice(nplaceHolder-3);
        nplaceHolder-=3;
    };
   
    // If there is any remainder of the number, byte size increases and the converter runs all over again with more space
    number>0?(byteSize++,console.log(`increasing byte size to ${byteSize}, ${numStringChoice} is over ${bitSum}`),converter(numChoice))
    
    // If no remainder, combines binary conversion into readable string with spaces in between
    :console.log(`Byte size is ${byteSize}\nThe number: ${numStringChoice}\nIn binary: ${binary.join("")}`);
}
converter(numChoice)



// let num = parseInt(numChoice)
// let len = (num).toString(2).length-1;
// let string = (num).toString(2);
// let answer = "";
// for(let i = len;i>3;i--){
//     i%4==0&&i!=0?answer+=(string[i]+" "):answer+=string[i];
// }
// if(len<3){
//     console.log("HI")
//     answer+="0"
// }
// answer+=string.substring(len-3)
// console.log(answer)