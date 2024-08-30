export default function getStudentIdsSum(getListStudentIds) {
  if (!Array.isArray(getListStudentIds)) {
    return [];
  }
  return getListStudentIds.reduce((accumulator, currentValue) => accumulator + currentValue);
}
