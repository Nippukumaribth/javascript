// const a=[10,20,30,40,];
// console.log(a[2]); //in array-indexing is always starts from 0
// const p1={
//     name:'rahul',
//     age:23
// };
// console.log(p1.name,p1.age);
 

// in javascript array store hetrogenius value


// a[5]=50;
// console.log(a);
// const b=[11,22,,33,,44];
// console.log(b);
// console.log(a.length);
// console.log(b.length);

// const c=['nippu',28,3.7,true]
// console.log(c);


// other code 
// const a=[];
// console.log(a.length);
// a[0]=20;
// a[1]=30;
// console.log(a.length);

// other code


// const b=new Array();
// const c=new Array(3);
// const d=new Array('jaipu','bhopal','siwan');
// // console.log(b,b.length);
// console.log(c,c.length);
// console.log(d,d.length);

// accesing array element using loop

// let a=[20,30,40,50,60,70];
// let i=0;
// while(i<a.length){
// console.log(a[i]);
// i++;
// }


//for loop

// let a=[20,30,40,50,60,70];
// for (let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

//for loop(other type)
// let a=[12,23,4,5,67,8,87,4,5,3,3];let
// for(let k in a){
// console.log(k,a[k]);
// }

// //for loop another type
// for(let v of a){
//     console.log(v);
// }

// modify array elements


// let a=[12,23,34,45,67,78];
// // console.log(a);
// a[2]=37;
// console.log(a);

//in {for(let v of a) }cant be modify but for(value k in a) can be modyfied

let a=[12,23,4,5,67,8,87,4,5,3,3];
for (let k in a){
    a[k]=a[k]+5;
}
console.log(a);