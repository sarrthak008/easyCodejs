
//1 document.getElementById

//  let box = document.getElementById("box2")
 
//  box.style.margin = "auto"

 // document.getElementById

 // document.getElementByClassName

//  let p = document.getElementsByClassName("pragragraph")

// let p = document.getElementsByTagName("p")

// console.log(p)

 let p = document.querySelector(".pragragraph")

 console.log(p)


 //getElementById

// getElementByClassName 

// querySelector

// getElementBytTagName

// querySelector

//text  == innerText
//html = innerHtml

// element.stye.


let btn =  document.querySelector("#btn")

 btn.addEventListener("click",()=>{
     btn.innerText == "follow" ? btn.innerText = "unfollow" : btn.innerText = "follow"
 })
 