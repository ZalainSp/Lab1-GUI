const book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: 2008,
    isbn: '978-0596517748'
};

function displayProperty(obj, propertyName) {
    return obj[propertyName];
}

function updateProperty(obj, propertyName, newValue) {
    obj[propertyName] = newValue;
}

console.log(displayProperty(book, 'title')); 
updateProperty(book, 'year', 2024);
console.log(displayProperty(book, 'year'));