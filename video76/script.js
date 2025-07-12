async function getdata() {

    //simulating getting data from a database or API or server
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove(455);
    },3500);

})
    
}


async function anotherdata(){

    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json;
    return data;

}

//settle of the promise means the promise is either resolved or rejected
//reslove means the promise is settled successfully
//reject means the promise is not settled successfully


//asyn will do its woek in background and will not block the main thread

// the await function will block the main thread until the promise is resolved or rejected
//to use the await fuction we need to wrap the code in an async function

async function main() {

    console.log('frist data');
    console.log('second');
    const data=await getdata();

    const data2=await anotherdata();
    console.log(data2);

    console.log(data);

    console.log('second last');
    console.log('last data');
    
    
    
    

}

main();
