"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Man_1 = require("./Man");
var Employee_1 = require("./Employee");
var person = new Person_1.Person('Gabriel', 176, 80);
person.think();
var man = new Man_1.Man('Gabriel', 176, 80, 'very strong');
man.hardWork();
var employee = new Employee_1.Employee('Gabriel', 176, 80, 'very strong', 'Policeman');
employee.showProfession();
var propertyNames = Object.getOwnPropertyNames(Employee_1.Employee.prototype);
console.log(propertyNames);
//# sourceMappingURL=main.js.map