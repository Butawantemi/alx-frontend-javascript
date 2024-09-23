interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Japhet',
    lastName: 'Paul',
    age: 23,
    location: 'Dodoma'
}

const student2: Student = {
    firstName: 'Jovin',
    lastName: 'Paul',
    age: 11,
    location: 'Mwanza'
}

const studentsList: Array<Student> = [student1, student2];