class Cat {
    constructor(name){
        this.name = name;
    }
    Speak(){
        console.log(this.name + ' makes a noise.');
    }
}

class Lion extends Cat {
   Speak(){
    super.Speak();
   } 
}

let cat = new Cat('Cat');
let lion = new Lion('Lion');