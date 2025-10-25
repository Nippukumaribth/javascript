// async function f1(){
//     console.log("i am not a normal function i am a function expression");
// }
// let p1=f1(); //async function by default promice return krta h


//producer/ code
function SomeAPI1(){
    let p1=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("MEIN PROMISE  1 HU");
            let X=Math.round(Math.random()*10+1);
            if(X%2==0)
                resolve(X);
            else
                reject(X);
        },5000);
    });
    return p1;

}


function SomeAPI2(){
    let p2=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("MEIN PROMISE 2 HU");
            let X=Math.round(Math.random()*10+1);
            if(X%2==0)
                resolve(X);
            else
                reject(X);
        },3000);
    });
    return p2;

}

 async function f1(){
    console.log("i am not a normal function i am a function expression");
     await SomeAPI1()
     .then((result)=>{
        console.log("promice fullfilled"+result);
       },(error)=>{
        console.log("promise rejected"+error);
       })
    await SomeAPI2()
    .then((result)=>{
        console.log("promice fullfilled"+result);
       },(error)=>{
        console.log("promise rejected"+error);
       })
}
let p1=f1(); 