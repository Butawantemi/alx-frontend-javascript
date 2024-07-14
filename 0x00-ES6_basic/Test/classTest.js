/* class className {
    constructor(){}
} */


class Car {
    constructor(brand, models, year){
        this.brand = brand;
        this.models = models;
        this.year = year;
    }
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Benz", "E350", 2021);

console.log(car1)