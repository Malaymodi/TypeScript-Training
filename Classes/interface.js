"use strict";
exports.__esModule = true;
function getFullName(person) {
    if (person.middleName != null)
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    else
        return "".concat(person.firstName, " ").concat(person.lastName);
}
var parth = {
    firstName: 'Parth',
    //middleName: 'K.',
    lastName: 'Desai',
    age: 41,
    middleName: 'K.'
};
console.log(getFullName(parth));
