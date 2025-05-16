

let container = document.getElementById("main-container");
let shadow = document.getElementById("shadow")

container.addEventListener("mousemove",(e)=>{
    
    let X = e.clientX;
    let Y = e.clientY;

     shadow.style.left = `${X-100}px`;
     shadow.style.top = `${Y-80}px`;
})

container.addEventListener("click",()=>{
    shadow.style.background = "blue"
})