class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    //Method 
    getArea(){
        return this.calcArea();
    }

    calcArea(){
        return this.height * this.width;
    }

    *getSides(){
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}