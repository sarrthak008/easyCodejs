
// function sum(){
//     //task 
//     console.log(12 + 12)
// }

// sum()


// function sum1(){
//     console.log(12 + 13)
// }

// sum1()

// function sayHello(kuchbhi){
//     console.log(kuchbhi)
//     console.log("hello")
// }


// // sayHello("easyCode")

// sayHello("sarthak")


// function sayGoodEvening(userName = "user"){
//     console.log(`GOOD EVENING ${userName}`);

// }

// sayGoodEvening("sarthak")


// function sum(a=0,b=0){
//     console.log(a+b)
// }

// sum(12,10)


// checknegativepositive 


// function checkPositiveNegative(num){

// }



// let result = checkPositiveNegative(10)

// console.log(result)

// function sayhello(){
//     return "hello"
// }

// let result = sayhello()

// console.log(result)


function checknegativepositive(num) {
    if (num == 0) {

        return ("number is zero")

    } else if (num > 0){

        return("number is positive")

    }else{
       return("number is negative")
    }
}

let res = checknegativepositive(0)

let res1 = checknegativepositive(-1)

let res2 = checknegativepositive(2)

console.log(res)
console.log(res1)
console.log(res2)