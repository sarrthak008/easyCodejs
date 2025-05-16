
//  get the element
// add the event = click
// change the btn text 

let openBar = document.querySelector(".open")
let menu = document.getElementById("menu")
let closeBar = document.querySelector(".ri-close-fill")


openBar.addEventListener("click",()=>{
      menu.style.right ="0"
})

closeBar.addEventListener("click",()=>{
    menu.style.right ="-80vw"
})