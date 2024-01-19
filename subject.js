export class Subject{
    constructor(name){
        this.name = name;
        this.students = [];
        this.teacher = {};
    }
    addTeacher(teacher){
        this.teacher = teacher;
        teacher.subjects.push(this);
    }

    removeTeacher(teacher){
        let subInd = teacher.subjects.indexOf(this);
        teacher.subjects.splice(subInd, 1); 
    }
}