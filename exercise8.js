const shape = { //base object
    calculateArea(){ //default method
        return 0;
    }
};

const rectangle = Object.create(shape); //new object created that is inheriting from shape
rectangle.width = 10; //adding properties to rectangle
rectangle.height = 5; //adding properties to rectangle
rectangle.calculateArea = function() { //overriding calculateArea method for rectangle
    return this.width * this.height;
}

const circle = Object.create(shape); //new object created that is inheriting from shape
circle.radius = 5; //adding properties to circle
circle.calculateArea = function() { //overriding calculateArea method for circle
    return Math.PI * this.radius * this.radius;
}

console.log(rectangle.calculateArea()); //50
console.log(circle.calculateArea()); //78.53981633974483