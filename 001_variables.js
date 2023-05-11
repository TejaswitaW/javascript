 // dont use var for variable decalration
 // var has global scope
 var a = 90;
 console.log(a);
 // redeclaration of var is possible
 // that is not allowed by let or const
 // so always use let or const
 var a = 100;
 console.log(a)

 {
    a = 500
 }
// as it is of global scope you can change it anywhere
 console.log(a)
