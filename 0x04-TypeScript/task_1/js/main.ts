interface teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsofExperience?: number;
    lacation: string;
    [propName: string]: any;
}

interface Directies extends teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }

  const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    workOnHomework(): string {
      return 'Currently working';
    }
    displayName(): string {
      return this.firstName;
    }
  };

export { printTeacher, StudentClass };