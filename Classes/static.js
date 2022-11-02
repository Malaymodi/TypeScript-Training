"use strict";
exports.__esModule = true;
var circle = /** @class */ (function () {
    function circle() {
    }
    circle.area = function (radius) {
        return this.pi * radius * radius;
    };
    circle.pi = 3.14;
    return circle;
}());
console.log("static property of the class circle is " + circle.pi);
console.log("calling the static method of class and displaying the area " + circle.area(10));
