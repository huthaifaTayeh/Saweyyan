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

const mid = {shortPass:80,longPass:67}
// replace ? with code that use spread operator to add mid object to player attributes property 
const newPlayer = {...player, attributes:{...player.attributes, mid}}
console.log(newPlayer) 

/**
 * {
    name:'hatem',
    attributes:{
        attack:{
            speed:60,
            shooting:95,
        },
        defense:{
            tackle:80,
            interception:66
        },
        mid:{
            shortPass: 80,
            longPass: 67 
        }
    },
    overall:64,
    age:23,
}
*/

/**
 * 
 * you cann't use 
 * const newPlayer = player ❌ 
 * newPlayer.attributes.mid = mid ❌ 
 */