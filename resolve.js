function resolveAfter3Seconds(){
    return new Promise(resolve=>{setTimeout(()=>{resolve('resolved');},3000);});
}

async function getAsyncData() {
    const result= await resolveAfter3Seconds();
    console.log(result);
    
}
getAsyncData();


const exampleSet=new Set([1,1,1,1,2,2,2,2]);
exampleSet.add(5);
exampleSet.add(17);
console.log(exampleSet.delete(5));
console.log(exampleSet.size);