export default function getListStudentIds(getListStudents) {
  return new Map(getListStudents.map((students) => [students.id]));
}
