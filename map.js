
// push  or unshift operation(pop and shift)

// const a=[12,23,45];
// console.log(a);
// a.push(78);
// a.unshift(10);
// console.log(a);
// a.pop();
// a.shift();
// console.log(a);

//splice function

// const a=[12,23,45];
// // a.splice(1,0,20,30); //add 20,30 from index 1
// // a.splice(1,1);//delete 1 element from index 1
// a.splice(0,1,20,40);//delete one value from index 0 and add two elements 20,40 from index 0
// console.log(a);

//for each() function
// const a=[24,34,56,56];
// a.forEach((element,index,a)=>{
//     console.log(index,element,a);
// a[index]=element+4;
// })
// console.log(a)

//map,filter and reduce function
//map function

// const a=[2,3,4,5];
// const b=a.map((e)=>e+1);
// console.log(a);
// console.log(b);

//filter function

// const a=[2,8,9,12,34,2,34,4,3];
// let b=a.filter((e)=>e>7);
// console.log(a);
// console.log(b);

//reduce function

// const a=[2,8,9,12,34,2,34,4,3];
// let result=a.reduce((s,e)=>s+e,0);//0 means initial addition 0 hai
// console.log(a);
// console.log(result);

//other program

// const a=[23,45,67,23,45];
// console.log(a.indexOf(23));
// console.log(a.lastIndexOf(23));
// console.log(a.includes(23));
// console.log(a.join('/'));

//other program

// const a=[34,56,90,80,70,60,40,30];
// let b=a.slice(2,6);
// console.log(b);

//other program
// let a=[2,3,45,5];
// let b=[2,3,45,5];
// let c=[2,3,45,5];
// let d=a.concat(b,c);
// console.log(d);

//other program

// const a=[34,56,90,80,70,60,40,30];
// a.reverse();
// console.log(a);

//other program

const a=[34,56,90,80,70,60,40,30];
const b=[...a];
a[0]=60;
console.log(a);

console.log(b);
