/// <reference path='Teacher.ts' />

namespace subjects {
    export class Subject {
        teacher: Subjects.Teacher;

        set setTeacher(teacher: Subjects.Teacher) {
            this.teacher = teacher;
        }
    }
}