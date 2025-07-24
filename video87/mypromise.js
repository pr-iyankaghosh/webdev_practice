import fs from "fs/promises"

let a=await fs.readFile("piku.txt")
// let b=await fs.writeFile("piku.txt","\n\n\nthis is using promise")
let c=await fs.appendFile("piku.txt","\n\n\nthis is using promise")

console.log(a.toString());
