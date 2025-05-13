function out(a){
    function inn(b){
        return a+b;
    }return inn;
}const result=out(4);
console.log(result(3));


const myFunction=(add)=>{add++;
    return add;
}
myFunction(3);

const number=[1,3,4]
const double=number.map(number=>number*2);
console.log(double);
const flo=number.filter(number=>number%2===0);
console.log(flo);

let myName={firN:"N",
    SecN:"L"
};
let myAge={...myName};
myName.firN="blue";
myAge.firN="red";
console.log(myName);
console.log(myAge);