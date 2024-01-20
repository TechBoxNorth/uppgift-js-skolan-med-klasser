import { School } from "./school.js";
import { Subject } from "./subject.js";
import { Student } from "./student.js";
import { Teacher } from "./teacher.js";
import { Grade } from "./grade.js";


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

// 12.
function populateSchool(){
    frontEndFaculty.addSubject(html);
    frontEndFaculty.addSubject(css);
    frontEndFaculty.addSubject(javascript);
    frontEndFaculty.addStudent(joanna);
    frontEndFaculty.addStudent(jenny);
    frontEndFaculty.addStudent(joshua);
    frontEndFaculty.addStudent(john);
    frontEndFaculty.addStudent(jessica);
    frontEndFaculty.addTeacher(tim);
    frontEndFaculty.addTeacher(brendan);
    frontEndFaculty.addTeacher(hakon);

    tim.addSubject(html);
    brendan.addSubject(javascript);
    hakon.addSubject(css);

    frontEndFaculty.students.forEach(student => {
        frontEndFaculty.subjects.forEach(subject => {
            student.enlistToSubject(subject);
        });
    });
}



function displayAllSubjectsOfStudent(student){
    let subs = [];
    student.subjects.forEach(subject => {
        subs.push(subject);
    });
    return subs;
}

function displayAllStudentsEnlistedToSubject(subject){
    let studs = [];
    subject.students.forEach(student => {
        studs.push(student.name);
    });
    return studs;
}



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
// brendan.addSubject(javascript);
// console.log(brendan, javascript);

// 8. add these methods: addTeacher, enlistToSubject, addStudent, addSubject

// 9. Try the different methods, use console to inspect.

// 10. add more methods: quitSubject, removeTeacher, relegateStudent, fireTeacher

// 13. create function displayAllStudents

// 14. Can't have too many functions, make some more! every function should have a return value.
// displayAllSubjectsOfStudent(student) 
// displayAllStudentsEnlistedToSubject(subject)
// displayAllTeachers 

// 15. add a class for grades





populateSchool();
let johnJavascriptGrade = new Grade(john, javascript, 'B', 'Doing quite well.');
console.log(john);
//frontEndFaculty.displayAllStudents();

//console.log(displayAllSubjectsOfStudent(jenny));
//console.log(displayAllStudentsEnlistedToSubject(javascript));
//console.log(frontEndFaculty.displayAllTeachers());

//frontEndFaculty.relegateStudent(jessica);

//console.log(frontEndFaculty);