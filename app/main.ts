import { Person } from './Person';
import { Man } from './Man';
import { Employee } from './Employee';

// console.log(Person, Man);

const person = new Person('Gabriel', 176, 80);
person.think();

const man = new Man('Gabriel', 176, 80, 'very strong');
man.hardWork();

const employee = new Employee('Gabriel', 176, 80, 'very strong', 'Policeman');
employee.showProfession();

// console.dir(Employee);
// console.log(Object.getOwnPropertyNames(employee));

const propertyNames = Object.getOwnPropertyNames(Employee.prototype);
console.log(propertyNames);
