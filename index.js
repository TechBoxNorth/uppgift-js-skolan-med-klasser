import { School } from "./school.js";
import { Subject } from "./subject.js";
import { Student } from "./student.js";
import { Teacher } from "./teacher.js";


// create a school
let frontEndFaculty = new School('Front End Faculty');

// create three subjects
let javascript = new Subject('JavaScript');
let html = new Subject('HTML');
let css = new Subject('CSS');

// create five students
let john = new Student('John', 23, 'male');
let joanna = new Student('Joanna', 22, 'female');
let joshua = new Student('Joshua', 22, 'male');
let jenny = new Student('Jenny', 21, 'female');
let jessica = new Student('Jessica', 23, 'female');

// create three teachers
let tim = new Teacher('Tim Berners-Lee');
let brendan = new Teacher('Brendan Eich');
let hakon = new Teacher('Hakon Wium Lie');