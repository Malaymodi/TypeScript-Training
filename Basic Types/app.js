"use strict";
exports.__esModule = true;
var empoyeeid = 101;
var age = 23;
var name = "Malay Modi";
var skills = ["dotnet", "javascript", "typescript", "angular"];
skills.push("reactjs");
var data = 55;
data = "any value";
//example of tupple
var details;
details = ['ram', 20, 'surat'];
details.push('shyam', '30', 'baroda');
//example of enum
var statuscodes;
(function (statuscodes) {
    statuscodes[statuscodes["NotFound"] = 404] = "NotFound";
    statuscodes[statuscodes["Success"] = 200] = "Success";
    statuscodes[statuscodes["Accepted"] = 202] = "Accepted";
    statuscodes[statuscodes["BadRequest"] = 400] = "BadRequest";
})(statuscodes || (statuscodes = {}));
console.log(empoyeeid);
console.log(age);
console.log(name);
console.log(skills);
console.log(skills[3]);
console.log(data);
console.log(details);
console.log(statuscodes);
console.log(statuscodes.Success);
