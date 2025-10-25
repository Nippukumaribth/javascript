// if statement

// let x=23;
// if(x>0){
//     console.log("positive");
// }
// if(x<=0){
//     console.log("negative");
// }

// if else statement

// let x=23;
// if(x>0){
//     console.log("positive");
// }
// else{
//     console.log("negative");
// }



// ? conditional exp1: exp 2

// let x=4;
// x>0? console.log("positive"):console.log("negative");


// if else if statement

// let marks=73;
// if (marks>=90){
//     console.log("A");
// }
// else if(marks>=80){
//     console.log("B");
// }
// else if(marks>=70){
//     console.log("C");

// }
// else if(marks>=60){
//     console.log("D");
// }
// else if(marks>=50){
//     console.log("E");
// }
// else{
//     console.log("fail");
// }


// swich statement

// let x=3;
// switch(x){
//     case 1:
//           console.log("A");
//           break;
//     case 2:
//           console.log("B");
//           break;
//     case 3:
//           console.log("C");
//           break;
//     case 4:
//           console.log("D");
//           break;
//     case 5:
//           console.log("E");
//     // default("invalid");
// }

// iterative control stetement

// while loop
// let i=1;
// while(i<=5)
// {
//     console.log("my sir ji");
//     i++;
// }

// DO WHILE LOOP
// let i=1;
// do{
// console.log(i);
// i++;

// } while(i<=5);


// FOR LOOP

// for(let i=1;i<=10;i++){
//     console.log()
// }

// FOR IN SATEMENT


// const p1={
//     name:'nippu',
//     age:20,
//     city:'siwan',
//     f1:function(){
//         console.log('hello')
//     }
// };
// for(let prop in p1){
//     console.log(prop,p1[prop]);
// }
// let a=[10,20,30,40,50,];
// for(let x in a){
//     console.log(x,a[s]);
// }

// for of loop

// let a=[11,23,45,67,];
// for( let v of a ){
//     console.log(v);
// }

// jump statement


// break statement

// let a=[12,23,45,67,65];
// let i=0;
// while(i<a.length){
    
//     console.log(a[i]);
//     if(a[i]%2==0)
//         break;
//     i++;
// }
// continue stemment

// for(let i = 0; i<10;i++){
//     if(i%2==0)
//         continue;
//     console.log(i);
// }

// return statement


function f1()
    {
    console.log("function f1");
    return 5;
}
let x=f1();
console.log(x);