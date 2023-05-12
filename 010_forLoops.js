// simple for loop
for(let i = 1; i <= 5;i=i+2){
    console.log(i);
}

console.log("for in loop");
// for-in loop => it gives keys
let a = [1,2,3,4,5,6];

for (let j in a){
    console.log(j);
}
console.log("getting values from for loop")
for (let j in a){
    console.log(a[j]);
}

let person = {
    name:"Ram",
    age:27
};

// for in loop gives keys
for (let k in person){
    console.log(person[k]);
}

// for of loop gives values, and passed object should be iterable
console.log("Use for of loop");
for (let k of a){
    console.log(k);
}
