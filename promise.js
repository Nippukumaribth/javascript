//producer code
function SomeAPI(){
    let p1=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("MEIN PROMISE HU");
            let X=Math.round(Math.random()*10+1);
            if(X%2==0)
                resolve(X);
            else
                reject(X);
        },3000);
    });
    return p1;

}

//consumer code

let p1=SomeAPI();
    p1.then((result)=>{
        console.log("promice fullfilled"+result);

    },(error)=>{
        console.log("promise rejected",error);
    });
 p1.catch(()=>{
    console.log("in catch -rejected");
 });  