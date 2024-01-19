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
let tim = new Teacher('Tim Berners-Lee'); // Inventor of HTML
let brendan = new Teacher('Brendan Eich'); // Inventor of Javascript
let hakon = new Teacher('Hakon Wium Lie'); // Inventor of CSS

/*

// 4. add a subject to a teacher
tim.subjects.push(html); // push adds at the end of the array, unshift adds at the beginning

// 5. add a student to a subjects students array
html.students.unshift(john);


// 6.

html.teacher = tim;
john.subjects.push(html);
//console.log(html);

function addSubjectToTeacher(subject, teacher){
    subject.teacher = teacher;
    teacher.subjects.push(subject);
    return teacher;
}

console.log(addSubjectToTeacher(javascript, brendan));
*/

// 7. add function to teacher class (done in teacher.js)
brendan.addSubject(javascript);
console.log(brendan, javascript);

// 8. add these methods: addTeacher, enlistToSubject, addStudent, addSubject

// 9. Try the different methods, use console to inspect.

// 10. add more methods: quitSubject, removeTeacher, relegateStudent, fireTeacher