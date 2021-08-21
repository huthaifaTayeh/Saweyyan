const leagueTables = [
    { team : 'milan', points:30, goals:67},
    { team : 'inter', points:30, goals:62},
    { team : 'rome', points:26, goals:77},
    { team : 'Atalanta', points:20, goals:87},
    { team : 'juve', points:28, goals:65},
   ] 
   
   // Use high order functions to sort the array based on who gets more points and if they equal in points it will check how score more goals 
   


console.log(leagueTables.sort((a, b) => {
    if (a.points > b.points) {
        return -1
        
    }
    else if (a.points < b.points){
        return 1
    }
    else if (a.goals > b.goals){
        return -1
    }
    else {
        return 1
    }

}))

   // Output
/*
  [
    { team : 'milan', points:30, goals:67},
    { team : 'inter', points:30, goals:64},
    { team : 'juve', points:28, goals:65},
    { team : 'rome', points:26, goals:77},
    { team : 'Atalanta', points:20, goals:87},
  ] 
*/