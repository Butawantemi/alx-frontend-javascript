export default function getStudentIdsSum(studentsIds) {
  if (!Array.isArray(studentsIds)) {
    return [];
  }
  return studentsIds.reduce((sum, student) => sum + student.id, 0);
}
