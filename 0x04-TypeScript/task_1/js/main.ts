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