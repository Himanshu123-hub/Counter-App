let increase = document.querySelector("#increase")
let h2 = document.querySelector("h2")
let decrease = document.querySelector("#decrease")
let reset = document.querySelector("#reset")

let count = 0

increase.addEventListener("click",function(){
    count++
    h2.innerHTML = count
})

decrease.addEventListener("click",function(){
    count--
    h2.innerHTML = count
})

reset.addEventListener("click",function(){
 
     count = 0
     h2.innerHTML = count
})