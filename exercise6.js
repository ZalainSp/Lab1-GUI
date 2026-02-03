const vehicle = { //parent object
    wheels: 4,
    describe() { //describe method
        return `This vehicle has ${this.wheels} wheels.`;
    }
};

const car = Object.create(vehicle); //child object

car.make = 'Audi'; //adding properties to child object
car.model = 'A8';
car.year = 2020;

console.log(car.describe()); //This vehicle has 4 wheels.
console.log(Object.hasOwn(car, 'make')); //true
console.log(Object.hasOwn(car, 'wheels')); //false
console.log(car.wheels); //4
console.log(car.describe()); //This vehicle has 4 wheels.