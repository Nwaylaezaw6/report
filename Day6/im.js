// import{add} from './different.js'
// console.log(add(2,3));

// const {add}=require('./different.js');
// console.log(add(2,3));

const fs=require('fs');
fs.readFile('example.txt','utf8',(err,data)=>{if(err){
    console.error('Error reading file:',err);
    return
}console.log('file content:',data);});