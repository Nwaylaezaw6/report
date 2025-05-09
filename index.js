let word1='Dylan';
let word2='Israel';
let num1=2;
let num2=3;
let example='Hello \n'+'world';
console.log(example)
document.getElementById('example').innerText=example;

const personalInformation={firstName:'Dylan',
    lastName:'Isreal',
    city:'Austin',
    state:'Texas',
    zipCode:73301
};
const{firstName:fn,lastName:ln}=personalInformation;
console.log(`${fn}${ln}`);

let{firstName,middleName,lastName}=['Dylan','Coding Good','Isreal'];
lastName='Clement';
console.log(lastName)

function addressMaker(address){
    const{city,state}=address;
    const newAddress={
        city,
        state,
        country:'United State'
    };
    console.log(`${newAddress.city}, ${newAddress.state},${newAddress.country}`)
}
addressMaker({city:'Austin',state:'Texas'});

let incomes=[62000,67000,75000];
let total=0;
for(const income of incomes)
    {
        console.log(total);
        total+=income;}

let fullName="Dylan coding god Isral";
for(const char of fullName){
    console.log(char);
}

let example1=[1,2,3,4,5,6];
let example2=[...example1];
example2.push(true);
console.log(example1);

function add(nums){
    console.log(arguments);
}
add(4,5,7,8,12)

function add(...num) {
    let total=num.reduce((x,y)=>  // replace normal functioon //map, filter git and github
     x+y
    );
    console.log(total);
    }
add(2,3,4,5)

function add(numArray=[]){
    let total=0;
    numArray.forEach((element)=>{
        total+=element;
    });
    console.log(total);
}
add();

if(false){
    var example14 =5;
}console.log(example14)

let example4='Dy';
console.log(example.padStart(10,'a'));


function add(numberArray=[x,y]){
    let total=0;
    numberArray.forEach((x,y)=>{total=x+y;
        return total;
});
    console.log(total);
    
}


