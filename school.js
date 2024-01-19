export class School {
    constructor(name){
        this.name = name;
        this.students = [];
        this.teachers = [];
        this.subjects = [];
    }
    addTeacher(teacher){
        this.teachers.push(teacher);
    }

    addStudent(student){
        this.students.unshift(student);
    }

    addSubject(subject){
        this.subjects.push(subject);
    }

    relegateStudent(student){
        let studInd = this.students.indexOf(student);
        this.students.splice(studInd, 1);
        this.subjects.forEach(subject => {
            studInd = subject.students.indexOf(student);
            if(studInd != -1){
                subject.students.splice(studInd, 1);
            }
        });
    }

    fireTeacher(teacher){
        let teachInd = this.teachers.indexOf(teacher);
        this.teachers.splice(teachInd, 1);
        this.subjects.forEach(subject => {
            if (subject.teacher === teacher){
                subject.teacher = {};
            }           
        });
    }

    displayAllStudents(){
        this.students.forEach(student => {
            console.log(`Name: ${student.name}`,`Age: ${student.age}`, `Gender: ${student.gender}`);
        });
    }
}