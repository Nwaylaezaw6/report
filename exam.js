class Animal{
    constructor(type,legs){
        this.type=type;
        this.legs=legs;
    }
    makeNoise(sound='Loud Noise')
    {console.log(sound);}

    get metaData(){
        return `Type: ${this.type},Legs:${this.legs}`;
    }
    static return10(){
        return 10;
    }
}

let cat=new Animal('cat',4);
cat.makeNoise();
console.log(cat.metaData);