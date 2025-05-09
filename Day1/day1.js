// const value="JS";
// const toBoolean=!!value;
// console.log(toBoolean);

// const number=43;
// const toString=number+"";
// console.log(toString);

// const string="43";
// const toNumber=+string;
// console.log(toNumber);

// const float=43.56;
// const toInteger=float| 0;
// console.log(toInteger);

// let age=window.prompt("How old are you");
// age=Number(age);
// age+=1;
// console.log(age,typeof age);

// let x="pizza";
// let y="burger";
// let z="coffee";
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

// //function within function
// function outerFunction(a){
//     function innerFunction(b){
//         return a+b;
//     }
//     return innerFunction;
// }
// const result=outerFunction(5)(8);
// console.log(result(8));

// //Callback function
// function greet(name,callback){
//     console.log("Hi"+name);
//     callback();
// }
// function sayBye(){
//     console.log("Bye");
// }
// greet ("Alice",sayBye);

// //firstclass function
//   //1.assign
//   const sayHello=function(){
//     console.log("Hello");
//   };
//   sayHello();

//   //2.Pass
  
//   //3.return
//   function multipler(factor){
//     return function (number) {
//         return number * factor;};
        
//  }
//  const double=multipler(2);
//  console.log(double(5));

//  //arrow function
//  const greet =() => {};
//     greet ();

// //map
// const numbers=[1,2,3,4,5]
// const doubles=number.map(num=>num*2);

// //filter
// const evenNumber=num.filter(num=>num%2===0);

// function outer(a){
//     function inner(b){return a+b;
//     }
// }

let myCar={             
    color:"Green",
    model:"2012"
};
let myBus={...myCar};  //let myBus=myCar;  Object get reference

myCar.price="300";
myBus.price="200";
myBus.add="300";
console.log(myCar);
console.log(myBus);

