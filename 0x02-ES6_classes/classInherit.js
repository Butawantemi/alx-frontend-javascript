class Animal {
    constructor(name) {
        this.name = name;

    }

    Speak(){
        console.log(this.name + ' makes a noise.');
    }
}

class Mouse extends Animal {
    constructor(name){
        super(name);
    }

    Speak(){
        console.log(this.name + ' makes a squeak.');
    }
}