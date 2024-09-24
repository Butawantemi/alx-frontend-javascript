interface majorCredits {
    credit: number;
    brand: 'major';
}

interface manorCredits {
    credit: number;
    brand: 'manor';
}

const sumMajorCredits = (subject1: majorCredits, subject2: majorCredits) => {
    return subject1.credit + subject2.credit;
}