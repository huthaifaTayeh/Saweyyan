// let myString = '10Testing'
// let anotherString = '15anodatest'
// let hasNumber = /\d/
// // if (isNaN(parseFloat(myString)) && isFinite(myString)) {
// //     console.log("It is")
// // }
// console.log( hasNumber.test(myString), hasNumber.test(anotherString), addStrings(myString,anotherString))
const str = "Ana has 27 apples";
if (typeof(str == 'string')){
    const num = str.match(/\d+/)[0];

    console.log(parseInt(num, 10))}
    