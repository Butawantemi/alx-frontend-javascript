/// <reference path='./subjects/Teacher.ts' />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
    firstName: 'Japhet',
    lastName: 'Paul',
    experienceTeachingC: 10
}

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirement());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
console.log(react.getRequirement());
console.log(react.getAvailableTeacher());