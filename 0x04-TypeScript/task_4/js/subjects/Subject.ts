/// <reference path='Teacher.ts' />

// Declare a namespace Subjects.
namespace Subjects {
    export class Subject {
        teacher: Subjects.Teacher;

        set setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}