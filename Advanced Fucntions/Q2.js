// 
// let checker = (zName) => {
//     return function (status) {
//               return function (salary) {
//                 return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//               };
//             };
//         }

// Q2  Part A
let checker = (zName) => (status) => (salary) =>status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
// Q2 Part B
console.log(checker('Ahmad')("Available")(5000))