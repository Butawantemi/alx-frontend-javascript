/// <reference path='./subjects/Teacher.ts' />

// Exporting the modules
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Declare CTeacher object and assign values.
export const cTeacher: Subjects.Teacher = {
    firstName: 'Japhet',
    lastName: 'Paul',
    experienceTeachingC: 10
}

// Assign the teacher to the subjects and print the output.
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirement());
console.log(cpp.getAvailableTeacher());

// Assign the teacher to the subjects and print the output.
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Assign the teacher to the subjects and print the output.
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirement());
console.log(react.getAvailableTeacher());