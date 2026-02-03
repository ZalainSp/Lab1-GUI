const shape = {
    calculateArea(){
        return 0;
    }
};

const rectangle = Object.create(shape);
rectangle.width = 10;
rectangle.height = 5;
rectangle.calculateArea = function() {
    return this.width * this.height;
}

const circle = Object.create(shape);
circle.radius = 5;
circle.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
}

console.log(rectangle.calculateArea()); //50
console.log(circle.calculateArea()); //78.53981633974483