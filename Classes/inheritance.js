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
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getName = function () {
        return "I am ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    Person.prototype.parentshow = function () {
        return "This is the method of parent class";
    };
    Person.prototype.show = function () {
        return "This is the show method of parent class";
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        var _this = 
        // Invoking the constructor of the Person class
        _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.displayInfo = function () {
        console.log(_super.prototype.getName.call(this));
        console.log("My Job title is ".concat(this.jobTitle));
    };
    Employee.prototype.childshow = function () {
        return _super.prototype.parentshow.call(this);
    };
    Employee.prototype.show = function () {
        return "This is the show method of child class";
    };
    return Employee;
}(Person));
var employee = new Employee('Mehul', 'Sharma', 'Software Developer');
employee.displayInfo();
console.log(employee.childshow());
console.log(employee.parentshow());
console.log(employee.show());
