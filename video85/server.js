var slugify=require ('slugify')

let a=slugify('some string')
console.log(a);

const b= slugify('some string with spaces','_')
console.log(b);

