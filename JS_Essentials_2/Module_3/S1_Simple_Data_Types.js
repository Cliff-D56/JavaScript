/* Most Simple Data Types
        >Boolean
        >Number
        >String
        >Date
*/

// Boolean -> True or False values
let bool = new Boolean(); // Creates new Boolean object
let bool2 = Boolean(1); // Evaluates if input is true or not, not a new object
let bool3 = true; bool3.valueOf() // booleans can be auto-boxed

// Number -> Numberical values, can include decimals 
let num = new Number(); // Creates new Boolean object
let num2 = Number(5); // DON'T DO THIS, ASSIGNS value to variable
let num3 = 5; // DO THIS

// String -> Word or sentence values, string of characters
let string = new String(); // Creates new String object
let string2 = String('Hello World'); // Evaluates if input is a string or not, not a new object
let string3 = 'Hello World'; // DO THIS

// Date -> Date and time values
let date = new Date(); // Creates new Date object, current time and date
let date1 = new Date(2020, 6); // July 2020, 2nd argument is month *Months are index based*
let date2 = new Date(2020, 6, 8); // July 8, 2020. 3rd argument is day
let date3 = new Date(2020, 6, 8, 10); // July 8, 2020, 10:00, 4th argument is hour
let date4 = new Date(2020, 6, 8, 10, 20, 45); // July 8, 2020, 10:20:45, 5th argument is minute, 6th is second

