export class Teacher{
    constructor(name){
        this.name = name;
        this.subjects = [];
    }
    // 7.
    addSubject(subject){
        this.subjects.push(subject);
        subject.teacher = this;
    }
}