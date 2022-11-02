"use strict";
exports.__esModule = true;
function add(a, b) {
    return a + b;
}
//function with default parameters
function welcome(name, greeting) {
    if (greeting === void 0) { greeting = 'hello'; }
    return greeting + " " + name;
}
//function with rest parameters
function restfunct() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    var total = 0;
    number.forEach(function (num) { return total += num; });
    return total;
}
console.log(add(10, 15));
console.log(welcome('malay'));
console.log(restfunct(10, 20, 30));
