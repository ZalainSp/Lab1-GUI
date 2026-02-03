const numbers = [1, 2, 3, 4, 5]; //create array

const squared = numbers.map(num =>{ //use arrow function with map method
    return num * num; //return square of each number
});

const evens = numbers.filter(num => { //use arrow function with filter method
    return num % 2 === 0; //return only even numbers
})

const sum = numbers.reduce((total, num) => { //use arrow function with reduce method
    return total + num; //return sum of all numbers
}, 0);

console.log('Squared:', squared); //1 , 4, 9, 16, 25
console.log('Even numbers:', evens); //2, 4
console.log('Sum:', sum); //15