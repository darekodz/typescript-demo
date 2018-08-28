"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Man_1 = require("./Man");
var Employee_1 = require("./Employee");
var $ = require("jquery");
$('a.button.is-primary.is-medium.is-fullwidth').click(function () {
    var person = new Person_1.Person('Gabriel', 176, 80);
    person.think();
    $('textarea.textarea.is-loading.is-info').append('\n');
});
$('a.button.is-link.is-medium.is-fullwidth').click(function () {
    var employee = new Employee_1.Employee('Gabriel', 176, 80, 'Policeman');
    employee.think();
    employee.showProfession();
    $('textarea.textarea.is-loading.is-info').append('\n');
});
$('a.button.is-info.is-medium.is-fullwidth').click(function () {
    var man = new Man_1.Man('Gabriel', 176, 80, 'Policeman', 'very strong');
    man.think();
    man.showProfession();
    man.hardWork();
    $('textarea.textarea.is-loading.is-info').append('\n');
});
//# sourceMappingURL=main.js.map