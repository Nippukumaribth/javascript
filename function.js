//function decaration(named function)
function f1(){
    console.log("i am f1");
}
f1();

//function expression
 const f2=function(){
console.log("i am f2");
}
f2();

// arrow function

const f3=(username)=>console.log("i am f3",username);
f3();

// default parameter
function f4(username =" unknown"){
    console.log("hello,"+ username);
}
f4();

// anonymous function
function fun(){
    f1();
}
fun(function(){
    console.log("i am f1")});

// iife
(function(){
console.log(" i am mitali")

})();


// argument object
// function f8(){
//     console.log(argument['0'],argument['']);

// }
// f8(12,34);

// constructor function
function person(name,age){
    this.name=name;
    this.age=age;
console.log(this);
}
// person('nippu',20); (optional)
let p1=new person('nippu',20)

// generator function

function* counter(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;

}
const g=counter();
console.log(g.next()
);
console.log(g.next()
);
console.log(g.next()
);
console.log(g.next()
);
console.log(g.next()
);




