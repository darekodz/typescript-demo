"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Man_1 = require("./Man");
var Employee_1 = require("./Employee");
var $ = require("jquery");
var person = new Person_1.Person('Gabriel', 176, 80);
person.think();
var employee = new Employee_1.Employee('Gabriel', 176, 80, 'Policeman');
employee.think();
employee.showProfession();
var man = new Man_1.Man('Gabriel', 176, 80, 'Policeman', 'very strong');
man.think();
man.showProfession();
man.hardWork();
$('h1.title').html('ssss');
//# sourceMappingURL=main.js.map