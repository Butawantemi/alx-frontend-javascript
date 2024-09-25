// Interface for the object of the type 'majorCredits'
interface majorCredits {
    credit: number;
    brand: 'major';
}

// Interface for the object of type 'manorCredits'
interface manorCredits {
    credit: number;
    brand: 'manor';
}

// Function that sums the credits of two objects of type 'majorCredits'
const sumMajorCredits = (subject1: majorCredits, subject2: majorCredits) => {
    return subject1.credit + subject2.credit;
}

// Function that sums the credits of two objects of type 'manorCredits'
const sumManorCredits = (subject1: manorCredits, subject2: manorCredits) => {
    return subject1.credit + subject2.credit;
}