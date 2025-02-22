function task(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){let success = false;
            if(success){
                resolve("promise resolve");
            }else{
                reject("rejected");
            }},2000);
}
)
}
//promise
/* task()
    .then(function (message) { // Better naming instead of 'resolve'
        console.log(message);
    })
    .catch(function (error) { // Better naming instead of 'reject'
        console.log(error);
    });
 */

//Async and awiat
async function test(){
    try{
        const message = await task();
    console.log(message);
    }catch(error){
    console.log(error);
    }
}

test();

//do some assignment when free https://github.com/100xdevs-cohort-2/assignments/tree/master/week-2/01-async-js/hard%20(promises)
