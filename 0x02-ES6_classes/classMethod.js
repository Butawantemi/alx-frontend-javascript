class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Method
  getArea() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }

  * getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

let square = new Rectangle(10, 10);
console.log(square.getArea());
console.log([...square.getSides()]);
