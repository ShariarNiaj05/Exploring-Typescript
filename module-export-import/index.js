"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { studentName as name, age } from "./Student";
var student = require("./Student");
var UserClass_1 = require("./UserClass");
function displayInfo() {
    // console.log(`Name: ${name}, Age: ${age}`);
    console.log("Name: ".concat(student.studentName, ", Age: ").concat(student.age));
}
// displayInfo()
// inheritance
//   let student1 = new Student("Niaj", 24, 101).display();
// class object
var user1 = new UserClass_1.User('Shariar.....', 24).display();
