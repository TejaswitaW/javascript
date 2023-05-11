// variables declared with let have block scope
let city = "Pune";
console.log("Outside: ",city)
// following line gives error
// let city = "Delhi";
{
    let city = "Gwalior";
    console.log("Inside: ",city)
}
console.log("Outside: ",city)

/*  output
Outside:  Pune
Inside:  Gwalior
Outside:  Pune */