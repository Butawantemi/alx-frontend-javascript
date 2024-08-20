//Declare a class named Point
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    //static method
    static displayName = 'Point';
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }

}

//Create two instances of Point
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

//Display name property
console.log(Point.displayName);
console.log(Point.distance(p1, p2));