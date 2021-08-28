const player = {
    name:'hatem',
    speed:60,
    shooting:95,
    stamina:5,
    overall:64,
    age:23,
}

// use Destructuring to get name,overall and save them in variable
// and rename overall property to rating
let {name, overall: rating} = player
// your code 
console.log(name,rating) // output : hatem 64

/*
submitting using the old way will be rejected
ex 
const name = player.name ❌ 
const rating = player.overall ❌ 
*/