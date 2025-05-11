let prompt = require('prompt');

prompt.start()


//create a function that takes as two number and opration as a parameter and log the result

function calculate(num1,num2,operation = "+"){
    
    switch(operation){

        case "+" :
             console.log(`ADDITION IS : ${num1 + num2}`);
             break;
        
        case "-" :
               console.log(`SUBTRACTION IS : ${num1 - num2}`);
               break;
        
        case "*" :
                 console.log(`MULTIPLICATION IS : ${num1 * num2}`);
                 break;
        
        case "/" :
                   console.log(`DIVISION IS : ${num1 / num2}`);
                   break;
    }

}







prompt.get(["num1","num2" ,"operation"],async (err,result)=>{

     let {num1 ,num2,operation} = result
     num1 = Number(num1)
     num2 = Number(num2)
    calculate(num1,num2,operation)

})

