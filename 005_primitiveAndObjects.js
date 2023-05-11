
/* Primitve datatypes
N=>null
N=>number
S=>string
S=>symbol
B=>boolean
B=>bigint
U=>undefined
*/
/*Non Primitive 
objects */
// primitives
let a = null;
console.log(a,typeof a)
let b = 18;
console.log(b,typeof b)
let c = 3.14;
console.log(c,typeof c)
let s = "Berlin";
console.log(s,typeof s)
let g = Symbol("Learning Javasript");
console.log(g,typeof g)
let d = true;
console.log(d,typeof d)
let e = BigInt(1804)+BigInt(123);
console.log(e,typeof e)
let f = undefined;
console.log(f,typeof f)
// object
// objects are key ,value pairs
let person = {
    name:"Ram",
    age:22,
    city:"Bengaluru"
}
console.log(person)
console.log(typeof person)
console.log(person["name"])