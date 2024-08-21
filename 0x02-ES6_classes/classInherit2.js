//Decrilaring a class Cat
class Cat {
    constructor(name){
        this.name = name;
    }
    //method
    Speak(){
        console.log(this.name + ' makes a noise.');
    }
}

//Extending the Cat class
class Lion extends Cat {
   Speak(){
    super.Speak();
   } 
}


//Creating instances of the classes
let cat = new Cat('Cat');
let lion = new Lion('Lion');

//calling the Speak method
cat.Speak();
lion.Speak();