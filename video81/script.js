
const addItem = async (item) => {
    await randomDelay()
    let div =document.createElement("div")
    div.innerHTML=item
    document.body.append(div)
    
}//for writing the lines in the body


let randomDelay=()=>{
    return new Promise((resolve,reject)=>{
      timeout=1+6*Math.random()
        setTimeout(() => {
           resolve() 
        }, timeout*1000);
    })
}//for creating the time delay
async function main(){
    let text=['Initializing Hacking','Reading your File','Password Files detected','Sending all files and Password to server','Cleaning up']
    setInterval(() => {
        let last=document.body.lastElementChild
        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else{
        last.innerHTML=last.innerHTML+"."}
    }, 100);
for  (const item of text) {
    await addItem(item)
    
}//iterating over the lines



await randomDelay()
clearInterval(t)



}

main()