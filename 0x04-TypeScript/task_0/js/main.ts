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

const table = document.createElement('table');

studentsList.forEach((student: Student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.lastName;
})

document.body.appendChild(table);

