let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code ( you can't use numbers )
// you have to solve the problem using array method only 
finalArr = arrTwo.slice(-1).concat(arrOne.reverse(), arrTwo.reverse().slice(-2))

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]