/// <reference path='Teacher.ts' />

// Namespace Subjects with a new interface Teacher
namespace Subjects {
    export interface Teacher {
        experinceTeachingReact?: number;
    }
    // Class React that extends Subjects. 
    export class React extends Subject {
        getRequirement(): string {
            return 'Here is the list of requirement for React';
        }

        getAvailableTeacher(): string {
            if (this.teacher.experinceTeachingReact === undefined) {
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
}