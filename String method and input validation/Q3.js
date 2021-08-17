const oldEmails = ['a@saweyyan.com','b@saweyyan.com','c@saweyyan.com']
const len_num = [1, 2, 3, 4, 5, 6, 7, 8]
function formIsValid(name,email,oldEmails,password,age){
// Intializing the flags for name, age, and password validation. 
    let isValid = true     
    let isName = true
    let validAge = true    
    let passIsValid = true

    let errorReason = {
        noName: false,
        noUpper: false,
        noLower: false,
        noNumber: false,
        noSpecialChar: false,
        hasSpace: false,
        shortPass: false,
        nameMixedChars: false,
        usedEmail: false,
        ageNaN: false,
        ageBelow: false,
        ageAbove: false,
        validEmailDomain: false,
        emailIdLength: false,
        idIsDomain: false,





    }

// Using the regexp object to create a pattern for all cases (upper, lower, numers, special chars.
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/
// Creating a pattern for arabic characters with unicode in range of u0600 to u06FF
    let arabic = /[\u0600-\u06FF]/;

// Validating whether the password matches thier constraints.
    if (!pattern.test(password)) {
        passIsValid = false;
        if (password.includes(" ")) {
            errorReason.hasSpace = true;
        }
        if (password.length > 6) {
            errorReason.shortPass = true;
        }
        if (/[^0-9]/.test(password)) {
            errorReason.noNumber = true;
        }
        if (/[^A-Z]/.test(password)) {
            errorReason.noUpper = true;
        }
        if (/[^a-z]/.test(password)) {
            errorReason.noLower = true;
        }
        if (/[^a-zA-Z0-9]/.test(password)) {
            errorReason.noSpecialChar = true;
        }
    }

    // Validating that each element in the name var is an arabic character.
    if (name != ""){
        for (let i = 0; i < name.split("").length; i++) {
            if (!arabic.test(name[i])) {
                isName = false;
            }
            
            
        }
    }
    else{
        errorReason.noName = true;
    }
    if (arabic.test(name)&& !isName) {
            errorReason.nameMixedChars = true;            
    }

// Confirming that age (if passed) is between (18 - 60).
    if ((((age < 18) || (age > 60)) || (typeof(age) != 'number')) && (typeof(age) != 'undefined' && typeof(age) != null)) {
        validAge = false;
        if (typeof(age)!= 'number') {
            errorReason.ageNaN = true;
        }
        else if ((age > 60) && (typeof(age) == 'number')) {
            errorReason.ageAbove = true;
        }
        else{
            errorReason.ageBelow = true;
        }
        
    }

    if (oldEmails.includes(email)) {
        errorReason.usedEmail = true;
    }
    else if (email.split("@")[1] != 'saweyyan.com' ){
        errorReason.validEmailDomain = true;
    }
    else if (!(len_num.includes(email.split("@")[0].length))) {
        errorReason.emailIdLength = true
    } else if (email.split("@")[0].includes('.com')){
        errorReason.idIsDomain = true;
    }
/*
    Using the previous flags for Name, Age, and Password to validate the account information.
    while the email constraints are confirmed seperatly without a var as a flag.
*/
    if ((email.split("@")[1] != 'saweyyan.com' ) || (oldEmails.includes(email)) || !(len_num.includes(email.split("@")[0].length)) || (email.split("@")[0] == 'saweyyan.com' ) || (!isName) || (!passIsValid) || (!validAge)) {
        isValid = false
        if (validAge == false) {
            if (errorReason.ageNaN) {
                console.log('Age is invalid! age must be a number!')
            }
            else if (errorReason.ageAbove){
                console.log('Invalid Age! too old enter a younger age')
            }
            else if (errorReason.ageBelow){
                console.log('Invalid Age! too young you must be 18+')
            }
        }
        else if (passIsValid == false){
            if (errorReason.hasSpace) {
                console.log('Invalid Password! Password cannot contain spaces');
            }
            else if (errorReason.noLower){
                console.log('Password must contasin at least 1 lowercase');
            }
            else if (errorReason.noUpper){
                console.log('Password must contain at least 1 Uppercase');
            }
            else if (errorReason.noNumber){
                console.log('Password must contain at least 1 number');
            }
            else if (errorReason.noSpecialChar){
                console.log('Password must contain at least 1 special Character');
            }
            else if (errorReason.shortPass){
                console.log('Password is too short make sure at least characters are used')
            }
        }
        else if (isName == false){
            if (errorReason.noName) {
                console.log('Invalid name name cannot be left blank!')
            }
            else if (errorReason.nameMixedChars){
                console.log('Name must be written in pure arabic letters')
            }
        }
        else{
            if (errorReason.emailIdLength){
                console.log('email length must be between 1 and 8 characters')
            }
            else if (errorReason.idIsDomain){
                console.log('cannot use domain name as emai ID')
            }
            else if (errorReason.usedEmail){
                console.log('Email already in use try another email ID')
            }
            else if (errorReason.validEmailDomain){
                console.log('Wrong domain name please make sure to use saweyyan.com as email domain')
            }
        }
    }
    
    return isValid
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------- TESTING BLOCK---------------------------------------------------------------------///

formIsValid('حاتم','a@saweyyan.com',['d@saweyyan.com'],'123456!Aa')


// name condition fail
formIsValid('hatem','email@saweyyan.com',[],'123456!Aa')
// false 
// not valid email
formIsValid('حاتم','e@gmail.com',[],'123456!Aa')
formIsValid('حاتم','e12345678@saweyyan.com',[],'123456!Aa')
formIsValid('حاتم','egmail.com',[],'123456!Aa') // not valid
formIsValid('حاتم','@saweyyan.com',[],'123456!Aa') // not valid

// email used
formIsValid('حاتم','a@saweyyan.com',['a@saweyyan.com'],'123456!Aa') // not unique

// password not valid
formIsValid('حاتم','a@saweyyan.com',['a@saweyyan.com1'],'1234')

formIsValid('حاتم','a@saweyyan.com',['a@saweyyan.com1'],'123456')

formIsValid('حاتم','a@saweyyan.com',['a@saweyyan.com1'],'123456a')

formIsValid('حاتم','a@saweyyan.com',['a@saweyyan.com1'],'123456aA')

formIsValid('حاتم','a@saweyyan.com',['a@saweyyan.com1'],'abcdegA!') // no numbers here 

// age is not valid
formIsValid('حاتم','a@saweyyan.com',['a@saweyyan.com1'],'123456Aa@','13')

formIsValid('حاتم','a@saweyyan.com',['a@saweyyan.com1'],'123456Aa@',13)
formIsValid('حاتم','a@saweyyan.com',['a@saweyyan.com1'],'123456Aa@',18)