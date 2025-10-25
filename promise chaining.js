  
//   //example 1
  
//   // producer/ code
// function SomeAPI1(){
//     let p1=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("MEIN PROMISE  1 HU");
//             let X=Math.round(Math.random()*10+1);
//             if(X%2==0)
//                 resolve(X);
//             else
//                 reject(X);
//         },5000);
//     });
//     return p1;

// }

// // /producer code
// function SomeAPI2(){
//     let p2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("MEIN PROMISE 2 HU");
//             let X=Math.round(Math.random()*10+1);
//             if(X%2==0)
//                 resolve(X);
//             else
//                 reject(X);
//         },3000);
//     });
//     return p1;

// }
// //consumer code

// let p1=SomeAPI1();
// let p2=SomeAPI2();
//     p1.then((result)=>{
//         console.log("promice fullfilled"+result);

//     },(error)=>{
//         console.log("promise rejected",error);
//     });
// p2.then((result)=>{
//         console.log("promice fullfilled"+result);

//     },(error)=>{
//         console.log("promise rejected",error);
//     });


//example 2
  
  // /producer code
// function SomeAPI1(){
//     let p1=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("MEIN PROMISE  1 HU");
//             let X=Math.round(Math.random()*10+1);
//             if(X%2==0)
//                 resolve(X);
//             else
//                 reject(X);
//         },5000);
//     });
//     return p1;

// }


// function SomeAPI2(){
//     let p2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("MEIN PROMISE 2 HU");
//             let X=Math.round(Math.random()*10+1);
//             if(X%2==0)
//                 resolve(X);
//             else
//                 reject(X);
//         },3000);
//     });
//     return p1;

// }
// //consumer code

// SomeAPI1()
//     .then((result)=>{
//         console.log("promice fullfilled"+result);
//         return SomeAPI2();
//        },(error)=>{
//         console.log("promise rejected"+error);
//        })
// .then((result)=>{
//        console.log("promise fullfilled"+error);

//         },(error)=>{

// }); 


