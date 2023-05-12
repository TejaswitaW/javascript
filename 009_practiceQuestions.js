// find age of person lies between 10 and 20
let age = 27;
if (age >= 10 && age <= 20){
    console.log("Age of person lies between 10 and 20");
}
else{
    console.log("Your age doesnt lie between 10 and 20");
}

console.log("You can drive: ",age > 18? "Yes":"No")

// check whether number divisible by both 2 and 3
let number = 18;

if (number%2 === 0 && number%3 === 0){
    console.log("Number is divisible by both 2 and 3");
}
else{
    console.log("Number is not divisible by both 2 and 3");
}