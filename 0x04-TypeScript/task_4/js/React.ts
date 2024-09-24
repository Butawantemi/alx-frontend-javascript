/// <reference path='Teacher.ts' />

namespace Subjects {
    export interface Teacher {
        experinceTeachingReact?: number;
    }

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