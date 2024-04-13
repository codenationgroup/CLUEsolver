


let fs = require('fs') // Require File System.
let constructorArray = JSON.parse(fs.readFileSync("./files/constructorArray.json")) // Javascript Object Notation (JSON)

function mathz(input2, input1)
{
for (let i = -10; i <= 10; i++)
    {
       if((input1/i) + i == input2){
           let result1 = input1/i;
           let result2 = i;
           let result
           if(result1 < 0)
           {
               
               result = "(x-" + Math.abs(result1) + ")"
           }else if(result1 > 0)
           {
               result = "(x+" + result1 + ")"
           }
           if(result2 < 0){
               result += "(x-" + Math.abs(result2) + ")"
           } else if(result2 > 0){
               result += "(x+" + result2 + ")"
           }
           if(result1 == result2){
               result += "^2"
           }
           console.log(result)
           removeFromList(result)
           console.log(input1/i, i) 
    }
}
}

function addArrayData(identifier, value, type)
{
    constructorArray.push({
        identifier: identifier,
        value: value,
        type: type
    })
    console.log(constructorArray)
}

function removeFromList(input)
{
    constructorArray.forEach(e => {
        console.log()
        if(e.value == input)
        {
            console.log(`INPUT:${input}`)
            switch (e.type)
                {
                    case "Suspect":
                        console.log(`*dramatic gasp*, it was not ${e.identifier}`),
                        delete constructorArray[constructorArray.indexOf(e)],
                        console.log(constructorArray)
                    break;
                  case "Room": 
                        console.log(`It was not done in the ${e.identifier} room!`),
                        delete constructorArray[constructorArray.indexOf(e)]
                  break;
                  case "Weapon":
                      console.log(`It was not done with the ${e.identifier}!!`),
                        delete constructorArray[constructorArray.indexOf(e)]
                }
        }else{
            console.log(`Sorry, no results found for ${input}`)
        }
    })
}
