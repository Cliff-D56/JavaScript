// Multiword Keywords are properties with more than one word
let obj = {
    "New Property" : "value"
}

// Since they are multiple words they can't be used in dot notation and must be used in bracket notation
// console.log(obj["New Property"]);



// Computed keys or keys generated in loops are the property values of an object
let contact = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};
for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(key);
    /* Due to the specific nature of Dot notation, it can't be used with computed keys due to the fact 
    that Dot notation will think the variable name is the actual property name and not the variable value*/
    console.log(contact[key]);
    console.log(contact.key); // undefined
}