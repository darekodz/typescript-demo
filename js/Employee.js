"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, g, w, profession) {
        var _this = _super.call(this, name, g, w) || this;
        _this.profession = profession;
        return _this;
    }
    Employee.prototype.showProfession = function () {
        console.log("\n\t\t\tThis person's profession is " + this.profession + "\n\t\t");
    };
    return Employee;
}(Person_1.Person));
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map