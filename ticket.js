let btnBuyTicket=document.getElementById('btnBuy');
btnBuyTicket.onclick=function(){
    let userAge=document.getElementById('userAge');
    let displayTicketFees=document.getElementById('displayfees');
    userAge=parseInt(userAge.value);
    if(userAge>65){
        displayTicketFees.innerText='You are $5';
         }
    else if(userAge>=10){
        displayTicketFees.innerText='You are $10';
    }
    else
    {displayTicketFees.innerText='You are free';}
    };



let color=['red','blue','green','white'];
console.log(color);
color.push('yellow');
color.push('pink');
color.pop();
color.shift();
console.log(color);


let myCar={
    "make":"Honda",
    "year":"2015",
    "model":"Accord"};
    for(let key in myCar){
        console.log(key);
        console.log(myCar[key])
}
