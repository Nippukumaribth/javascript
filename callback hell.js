//call back
// function f1(fun){
//     console.log("i am in f1");
//     fun();
// }
// f1(()=>{
//     console.log("hello");
// })

// other fuction
// setTimeout(()=>{
//     console.log("arrow function");
// },3000);
// console.log("line 1");
// console.log("line 2");
// console.log("line 3");

// other program

//call back hell me multiple acynchronous fuction ek per ek call ho rhe h

f1(function(value1){
    f2(value1,function(value2){
        f3(value2,function(value3){
           f4(value3,function(value4){
              console.log("all done");
            });
        });
    });
});