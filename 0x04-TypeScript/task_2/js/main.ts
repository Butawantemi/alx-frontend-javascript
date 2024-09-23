interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Connot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a coffee break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

const createEmployee = (salary: number | string):
    Director | Teacher => {
        if (typeof salary === 'number' && salary < 500) {
            return new Teacher();
        } else {
            return new Director();
        }
    }

const isDirector = (employee: Director | Teacher): employee is Director => {
    return (employee as Director).workDirectorTasks !== undefined;
}

const executeWork = (employee: Director | Teacher): string => {
    if (!isDirector(employee)) {
        return employee.workTeacherTasks();
    } else {
        return employee.workDirectorTasks();
    }
}



