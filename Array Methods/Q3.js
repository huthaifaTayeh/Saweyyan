let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// use only array methods to get this output ( you can't use numbers) 
// your code
allArrs = arr1.concat(arr2).sort().slice(-3).join("").toLowerCase()
console.log(arr1)
console.log(allArrs); // fxy