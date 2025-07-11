let rand=Math.random()
console.log(rand)
let ran=Math.random()
console.log(ran)
let ra=Math.random()
console.log(ra)

let first,second,third

//generating first name

if(rand<0.33){
    first='Crazy'
}
else if(rand>=0.33&&rand<0.66){
    first='Amazing'
}
else{
    first='Fire'
}


//second word
if(ran<0.33){
    second='Engiene'
}
else if(ran>=0.33&&ran<0.66){
    second='Foods'
}
else{
    second='Garments'
}
if(ran<0.33){
    second='Engiene'
}
else if(ran>=0.33&&ran<0.66){
    second='Foods'
}
else{
    second='Garments'
}

//third word
if(ra<0.33){
    third='Bros'
}
else if(ra>=0.33&&ra<0.66){
    third='limiter'
}
else{
    third='Hub'
}


console.log(`${first} ${second} ${third}`)