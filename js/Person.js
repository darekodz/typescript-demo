"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person(name, growth, weight) {
        this.name = name;
        this.growth = growth;
        this.weight = weight;
        this.BMI = this.countBmi(this.growth, this.weight);
    }
    Person.prototype.think = function () {
        console.log("\n\t\t\t" + this.name + " as a Person is able to think. His / Her BMI is " + this.BMI + "\n\t\t");
    };
    Person.prototype.countBmi = function (growth, weight) {
        var growthInMetres = growth / 100;
        var bmi = (weight / growthInMetres) / growthInMetres;
        return Math.round(bmi * 100) / 100;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map