class Name {
    constructor(name){
        this.name = name;

    }
    sayName (){
        console.log(this.name);
    }
}

Name = new Name('John');
sayName();