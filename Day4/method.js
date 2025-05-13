var color=["red","green","blue","white"];
color.push("black");
console.log(color);
color.pop();
console.log(color);
color.shift();
color.unshift();
console.log(color);
color[2]="pink";
console.log(color);
color.splice(2,0,"purple");
color.splice(0,1);
console.log(color);
var col=color.slice(3);
var col=color.slice(1,3)
console.log(col);
color.sort();
console.log(color);
color.reverse();
console.log(color);

var myGirl=["mya","Hla"];
var myBoy=["mg","Tun"];
var myChild=myBoy.concat(myGirl);
console.log(myChild);

//String Method

var txt="My Name is Nway";
txt.length;
txt.indexOf("N");
txt.lastIndexOf("N");
txt.search("y");
console.log(txt);
var str=txt.slice(4,8);
console.log(str);
var str=txt.substring(5,3);
console.log(str);
var str=txt.replace("a","b");
console.log(str);
txt.toUpperCase();
console.log(txt);
txt.toLowerCase();
console.log(txt);
var str2="mmmm";
var str3="vvvvv";
var str4=str2.concat(str3);
console.log(str4);


