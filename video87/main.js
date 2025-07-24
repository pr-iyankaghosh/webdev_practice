const fs=require('fs')
// console.log(fs);

console.log('starting');

//fs.writeFileSync('piku.txt',"i am priyanka")

fs.writeFile("piku2.txt","i am piku",()=>{
    console.log('done');
    fs.readFile("piku2.txt",(error,data)=>{
        console.log(error,data.toString());
        
    })
    
})

fs.appendFile("piku.txt","piku234",(e,d)=>{
    console.log(d);
    
})

console.log("ending")
