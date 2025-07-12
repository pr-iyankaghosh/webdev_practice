const sleep = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
function sum(a,b){
    return a+b;
}

(async function main() {
   
    let a=await sleep()
    console.log(a);

    let b= await sleep()  
    
    
    let [x,y,...rest]=[1,5,7,8,9,10,87]

    console.log(x,y,rest);//destructuring


    let obj={
        d:1,
        e:2,
        c:3
    }

    let {d,e}=obj;
    console.log(d,e);

    let arr=[1,3,4];
    console.log(sum(...arr));//spread operator kol do


    //hoisting first declared then value is assigned
    //it only can be done with var keyword and not with let and const
    
    
    
})()//imedietly invoke function iife
