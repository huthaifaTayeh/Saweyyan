function specialMix(...data) {
    let sum = 0
    let stringCount = 0
    for (let dIndex = 0; dIndex < data.length; dIndex++) 
    {
       
        if (typeof data[dIndex] === 'string' || data[dIndex] instanceof String) 
        {
            
            
            if (/\d/.test(data[dIndex]))
            {
                const str = data[dIndex];
                const num = str.match(/\d+/)[0];
                sum += parseInt(num, 10);
            }

            else 
            {
                stringCount += 1
            }
            
        }
        else 
        {
            sum += data[dIndex]
        }
        
    }

    if (stringCount === data.length) 
    {
        return `All Is Strings`        
    }
    else
    {
        return sum;
    }
    // Your Code Here
    // if all arguments are number return the total sum 
    // if argument is number string ( "10" ) convert it to number then return the sum of all numbers
    // if argument is string not contain a number ,ignore it and return the sum of numbers
  // if all arguments are string return :  All Is Strings

  }
  
  // see the output to understand more
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings