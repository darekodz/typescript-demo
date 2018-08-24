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
var Man_1 = require("./Man");
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, g, w, power, profession) {
        var _this = _super.call(this, name, g, w, power) || this;
        _this.profession = profession;
        return _this;
    }
    Employee.prototype.showProfession = function () {
        console.log("This person is a Man and his profession is " + this.profession);
    };
    return Employee;
}(Man_1.Man));
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map