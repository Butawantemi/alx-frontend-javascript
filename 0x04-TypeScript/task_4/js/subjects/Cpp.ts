/// <reference path='Teacher.ts' /> 

// Namespace Subjects with a new interface Teacher
namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }
    // Class Cpp that extends Subject.
    export class Cpp extends Subject {
        getRequirement(): string {
            return 'Here is the list of requirements for Cpp';
        }
    
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC === undefined) {
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
}
