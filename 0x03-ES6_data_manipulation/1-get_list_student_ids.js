export default function getListStudentIds(getListStudents) {
  return getListStudents.map((students) => students.id);
}
