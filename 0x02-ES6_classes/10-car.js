export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  [Symbol.toString](hint){
    if (hint === 'string') {
        return `Car: ${this._brand} ${this._motor} ${this._color}`;
    }
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
