// update this function to return the type is other if no parameters passed
const fn = type => typeof(type)=='null'||typeof(type)=='undefined' ? `the type is other`:`the type is ${type}`

// you can't touch this line
console.log(fn()) 

// note you can solve this question using both arrow and normal function