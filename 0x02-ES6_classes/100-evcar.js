import Car from "./10-car.js";

export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    get range() {
        return this._range;
    }

    set range(value) {
        this._range = value;
    }

    cloneCar() {
        // Create a new instance of the Car class with the brand, motor, and color
        return new Car(this._brand, this._motor, this._color);
    }
}
