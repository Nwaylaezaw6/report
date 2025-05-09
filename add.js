function add(paraml,){
    const example={
        name:'Dyna',};
        console.log(example)
    };
    add();

//Replace simple function
    function addnumber(num){
        let total=0;
        for(let i=0;i<num.length;i++)
        {total+=num[i];}
        console.log(total);
    }
    addnumber([2,3,4,5]);

    //map
    function addnum(no){
        let total=0;
        no.map(num=>total
            +=num);
        console.log(total);
    }
    addnum([3,4,5,6]);

    //filter
    const numbers=[,3,4,5,6];
    const even=numbers.filter(function(number){
        return number%2===0;});
console.log(even);
    