/// <reference path='Teacher.ts' />

// Namespace Subjects with a new interface Teacher
namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    
    // Class Java that extends Subject.
    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava === undefined) {
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
}