// var arabic = /[\u0600-\u06FF]/;
// let isName = true
// var string = 'عربيةh';
// // console.log(string.split(""))
// for (let i = 0; i < string.split("").length; i++) {
//     // console.log("inside foor fllop")
//     if (!arabic.test(string[i])) {
//         isName = false
//     }
    
// }
// let spacePattern = /[^a-zA-Z0-9]/;
// let oth_patt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;
// let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?])(?!.*\s).+$",'g');
// let upper_pattern = new RegExp("^(?=.*[A-Z]).+$")
// let pass = '123456 !aaaaA'
// let pass1 = '123456!aaaaA'
// let pass2 = 'abcdASDHJ12365'

// console.log(spacePattern.test(pass.trim()))
// console.log(spacePattern.test(pass1.trim()))
// console.log(spacePattern.test(pass2.trim()))
// // console.log(/[^0-9]/.test(pass2.trim()))


// // console.log(arabic.test(string)); // displays true
// // console.log(isName)

let age = '13';
let age1 = 13;

if (typeof(age) == 'Number'){
    console.log("well")

    console.log(typeof(age))
}