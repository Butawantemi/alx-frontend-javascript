export default class HolbertonCourse {
  // Constructor
  constructor(name, length, students) {
    if (
      typeof name !== "string" ||
      typeof length !== "number" ||
      !Array.isArray(students)
    ) {
      throw new Error("Invalid type");
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters and Setters for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string") {
      throw new Error("Name must be a string");
    }
    this._name = value;
  }

  // Getters and Setters for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== "number") {
      throw new Error("Length must be a number");
    }
    this._length = value;
  }
  // Getters and Setters for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error("Students must be an array");
    }
    this._students = value;
  }
}
