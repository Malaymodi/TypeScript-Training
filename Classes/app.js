"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student = /** @class */ (function () {
    function student(rollno, fname, lname, city, age) {
        this.semester = 4;
        this.dob = new Date(1999, 2, 3);
        this.rollno = rollno;
        this.fname = fname;
        this.lname = lname;
        this.city = city;
        this.age = age;
    }
    Object.defineProperty(student.prototype, "coursevalue", {
        /*public get sem(){
            return this.semester;
        }*/
        set: function (course) {
            this.course = course;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "courses", {
        get: function () {
            return this.course;
        },
        enumerable: false,
        configurable: true
    });
    student.prototype.getfullname = function () {
        return "Full Name of Student is ".concat(this.fname, " ").concat(this.lname);
    };
    student.prototype.getcity = function () {
        return "the city of the ".concat(this.fname, " is ").concat(this.city);
    };
    student.prototype.getdateofbirth = function () {
        return "the date of birth of yash is ".concat(this.dob);
    };
    return student;
}());
var yash = new student(1, 'yash', 'shah', 'baroda', 19);
console.log(yash.getfullname());
console.log(yash.getcity());
console.log(yash.fname);
console.log(yash.getdateofbirth());
yash.coursevalue = 'angular';
console.log(yash.courses);
