const player = {
    name:'hatem',
    attributes:{
        attack:{
            speed:60,
            shooting:95,
        },
        defense:{
            tackle:80,
            interception:66
        }
    },
    overall:64,
    age:23,
}

// use Destructuring to get name,attack attributes only when
let {name, attributes:{attack}} = player
console.log(name,attack) // hatem { speed: 60, shooting: 95 }

/**
 * 
 * you cann't use 
 * const attack = player.attributes.attack; ❌ 
 */