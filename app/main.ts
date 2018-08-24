import { Person } from './Person';
import { Man } from './Man';
import { Employee } from './Employee';

// console.log(Person, Man);

const person = new Person('Gabriel', 176, 80);
person.think();

const employee = new Employee('Gabriel', 176, 80, 'Policeman');
employee.think();
employee.showProfession();

const man = new Man('Gabriel', 176, 80, 'Policeman', 'very strong');
man.think();
man.showProfession();
man.hardWork();
