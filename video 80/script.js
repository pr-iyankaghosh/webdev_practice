let animal={
    eats:true
};

let rabbit={
    jumps:true
};

rabbit.__proto__=animal;//sets rabbit.[prototype]=animal 
//prototype is a property of the object that holds the prototype of the object that are addtional property


class Animal{

    constructor(name){
        this.name=name;
        console.log('object is being created');

        
    }

    eats(){
        console.log('eating food');
        
    }
    jumps(){
        console.log('jumping');


    }
}

class Lion extends Animal{
    constructor(){
        super('lion');
        console.log('o ject is being created and its a lion');
        
    }
    eats(){
        super.eats()
        console.log('lion eatting');
        
    }

}

let a=new Animal('bunny');

a.eats

let l=new Lion('sherra');

console.log(l);

l.eats

