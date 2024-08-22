export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (
      typeof name !== "string" ||
      typeof length !== "number" ||
      !Array.isArray(students)
    ) {
      throw new Error("Invalid type");
    }
    this._name = name;
    this._lenght = lenght;
    this._students = students;
  }
}
