const book = { //create book object with respective properties
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: 2008,
    isbn: '978-0596517748'
};

function displayProperty(obj, propertyName) { //function to display property value
    return obj[propertyName]; //access property using bracket notation
}

function updateProperty(obj, propertyName, newValue) { //function to update property value
    obj[propertyName] = newValue; //update property using bracket notation
}

console.log(displayProperty(book, 'title')); //JavaScript: The Good Parts
updateProperty(book, 'year', 2024); //update year to 2024
console.log(displayProperty(book, 'year')); //2024