export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);

  const updateStudents = studentsByCity.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    const updateGrade = studentGrade ? studentGrade.grade : 'N/A';
    return {
      ...student,
      grade: updateGrade,
    };
  });
  return updateStudents;
}
