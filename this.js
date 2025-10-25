// let a=5;
// // console.log(this.a);
// function f1(){
//     "use strict"
//     b=6;
// console.log(this);
// }  
// f1();




// code


// const obj={
//     name:'nippu',

//     age:'20',
//     sayHi:function(){
//         console.log("i am "+ this. name);
//     }
// }
// obj.sayHi();
// const anotherObj={
//     name:'mitali',

// };
// anotherObj.sayHi=obj.sayHi;
// anotherObj.sayHi();


// constructor Object


// function Book(id,title,price){
//     this.id=id;
// this.title=title;
// this.price=price;
// console.log(this);
// }
// const b1=new Book(1,"js in depth",400);


// other code


// let btn=document.getElementById("btn");
// btn.addEventListener('click',function(){
//     console.log(this);
// });


//   this in arrow function 


// function f1(){
//     let a=10;
//     const arrow=()=>{
//         console.log(this);

//     };
//     arrow();
// }
// const ol=new f1();


// const obj={
//     a:10,
//     f1:function(){
//         console.log(this.a);//this==obj
//         setTimeout(function(){
//     console.log(this); //this==window(regular function)
//         },2000);
//     },
//     f2:function(){
//         console.log(this.a); //this==objt
//         setTimeout(()=>{
//     console.log(this); //this==obj
//         },2000);
// }
// };
// obj.f1();
// obj.f2();

