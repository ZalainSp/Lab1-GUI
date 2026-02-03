const person = { //prototype object with properties and method
    species : 'Human',
    breathe(){ //breathe method
        return 'Breathing...';
    }
};

const employee = Object.create(person); //new object created that is inheriting from person
employee.company = 'Ministry of Immigration';
employee.position = 'Engineer';

const manager = Object.create(employee); //new object created that is inheriting from employee
manager.department = 'HR';
manager.team = [];

manager.addTeamMember = function(name) { //method to add team members
    this.team.push(name); //adding name to team array 
}


manager.addTeamMember("James"); //adding team members
console.log(manager.team); //prototype chain manager
console.log(manager.company); //prototype chain employee
console.log(manager.species); //prototype chain person
console.log(manager.breathe()); //prototype chain Object.prototype

