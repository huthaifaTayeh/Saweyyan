var random_boolean = Math.random() < 0.5;
const mathPromise = new Promise((resolved, rejected) =>{
    if (random_boolean){
        resolved(`success`)
    } else {
        rejected(`fail`)
    }
})


mathPromise.then(
    (resolved)=>{console.log(resolved)},
    (rejected)=>{console.log(rejected)}
)