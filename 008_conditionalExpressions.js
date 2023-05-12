//let age = prompt("Please enter your age: ");

let age = 27;

if (age < 18){
    console.log("You are not allowed to drive");
} 
else{
    console.log("You are allowed to drive");
}

// convert number into string

let k = "18";

console.log(typeof k);// string

let t = Number.parseInt(k);

console.log(typeof t);// number

let new_age = 45;

if (new_age > 0 && new_age < 18){
    console.log("You are very young");
}
else if (new_age >= 18 && new_age <= 70){
    console.log("You are eligible for driving");
}
else{
    console.log("Wrong Input");
}
// switch case statment

let city = "Pune";

switch(city){
    case "Delhi": 
        console.log("This is delhi");
        break;
    case "Gwalior":
        console.log("This is Gwalior");
        break;
    case "Bengaluru":
        console.log("This is Bengaluru");
        break;
    default:
        console.log("This is India");
        break;

}

// ternery operator
let marks = 98;

let words = marks > 95? "Great":"Good";

console.log(words)