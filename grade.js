export class Grade {
    constructor(student, subject, grade, comment){
        this.student = student;
        this.subject = subject;
        this.grade = grade;
        this.comment = comment;
        student.grades.push(this);
    }
}