export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city.
  const studentsByCity = students.filter((student) => student.location === city);
  // Update the grade of the filtered.
  const updateStudents = studentsByCity.map((student) => {
    // Find the grade of the student.
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    // If the student has a grade, update the student grade.
    const updateGrade = studentGrade ? studentGrade.grade : 'N/A';
    // Return the updated student.
    return {
      ...student,
      grade: updateGrade,
    };
  });
  // Return the updated students.
  return updateStudents;
}
