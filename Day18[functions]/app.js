
// let greetUser = function(name){
//      console.log(name)
// }

// console.log(greetUser("kajal"))

// node node ES-6 
// arrow function 


// let sayThankYou = (name) =>{
//     console.log(`thank you ${name}`)
// }

// sayThankYou("dhanshree")


//IIFE  Immediately invoke function expression


// (function(){
//     console.log("hii")
// })()


// call back Function:

 
// let abc=(xyz)=>{
//     console.log("hello")
//     xyz()
// }

// abc(()=>{
//     console.log("hii")
// })

// express mongo db react == callback dekhneko 


// let greet=(cb)=>{
//    console.log("hii")
//    cb()
// }

// greet(()=>{
//     console.log("greet complete")
// })


// Highre order function

//  yesa function jo eak to parameter dusara function leta hee or return the function


// let greet =(cb) =>{
//     console.log("hii")
//     cb()
// }

// greet(()=>{
//     console.log("call back execute")
// })

// function retHelloFunction(){

//     return function(){
//         return function(){
//              return function(){
//                 console.log("hello")
//              }
//         }
//     }
// }

// let result = retHelloFunction()

// console.log(result())