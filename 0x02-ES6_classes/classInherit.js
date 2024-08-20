//Declaring a class and extending it with another class
class Animal {
    constructor(name) {
        this.name = name;

    }
    
    //Method
    Speak(){
        console.log(this.name + ' makes a noise.');
    }
}

//Extending the Animal class
class Mouse extends Animal {
    constructor(name){
        super(name);
    }

    Speak(){
        console.log(this.name + ' makes a squeak.');
    }
}

//Creating instances of the classes
let animal =  new Animal('Animal');
let mouse = new Mouse('Mouse');

//Calling the Speak method
animal.Speak();
mouse.Speak();