"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Employee.prototype.getfullname = function () {
        return "fullname of employee is ".concat(this.fname, " ").concat(this.lname);
    };
    Employee.prototype.compensationStatement = function () {
        return "".concat(this.fname, " makes ").concat(this.getfullsalary(), " a month.");
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getfullsalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employee));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(firstName, lastName, rate, hours) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    Contractor.prototype.getfullsalary = function () {
        return this.rate * this.hours;
    };
    return Contractor;
}(Employee));
var jay = new FullTimeEmployee('Jay', 'sheth', 12000);
var jaydeep = new Contractor('Jaydeep', 'desai', 100, 160);
console.log(jay.compensationStatement());
console.log(jaydeep.compensationStatement());
