export class Student{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.subjects = [];
        this.grades = [];
    }
    enlistToSubject(subject){
        this.subjects.push(subject);
        subject.students.push(this);
    }

    quitSubject(subject){
        let index = this.subjects.indexOf(subject);
        this.subjects.splice(index, 1);
        let studInd = subject.students.indexOf(this);
        subject.students.splice(studInd, 1);
    }
}