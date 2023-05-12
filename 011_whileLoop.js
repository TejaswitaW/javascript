// do while loop, at least once this loop will get executed
let age = 23;
do{
    console.log("Age should be less than 18");
    if (age < 18){
        console.log("You are eligible");
        break
    }
}while(age<18);

// while loop
let i = 1;

while (i < 30){
    console.log(i);
    i += 3
}

let n = 5;
// let p = 0;
let p = 90;

do{
    console.log(p);
    p++;
}while(p <= n)