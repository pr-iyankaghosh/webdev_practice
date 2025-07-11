console.log("scripting")

let box=document.getElementsByClassName("box")

let bn=document.querySelector(".container").children

console.log(box)
console.log(bn)

function getrandomcolor(){

    val1=Math.ceil(0+Math.random()*255)
    val2=Math.ceil(0+Math.random()*255)
    val3=Math.ceil(0+Math.random()*255)
    return `rgb(${val1},${val2},${val3})`
}

Array.from(box).forEach(e=>{
   e.style.backgroundColor=getrandomcolor()
   e.style.color=getrandomcolor()
}

)