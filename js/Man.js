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
var Employee_1 = require("./Employee");
var Man = (function (_super) {
    __extends(Man, _super);
    function Man(name, g, w, p, power) {
        var _this = _super.call(this, name, g, w, p) || this;
        _this.power = power;
        return _this;
    }
    Man.prototype.hardWork = function () {
        $('textarea.textarea.is-loading.is-info').append(this.name + " as a Man has " + this.growth + " cm growth, \n" + this.weight + " kg weight and he is " + this.power + " so he is able to work very hard\nThe \"hardWork() method\" executed.\n");
    };
    return Man;
}(Employee_1.Employee));
exports.Man = Man;
//# sourceMappingURL=Man.js.map