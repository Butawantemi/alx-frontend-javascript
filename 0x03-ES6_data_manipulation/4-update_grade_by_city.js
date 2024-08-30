export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.filter((studentId) => studentId === student.id);
      const { grade = 'N/A' } = newGrade.length > 0 ? newGrade[0] : {};
      return { ...student, grade };
    });
}
