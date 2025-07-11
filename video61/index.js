let random=Math.random();

a=prompt("enter the first number")
b=prompt("enter the second number")
c=prompt("enter operation")

let obj={
    '+':'-',
    '*':'+',
    '-':'/',
    '/':'**'
}

if(random>0.1){

    //correct operation

    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //wrong operation
  c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}