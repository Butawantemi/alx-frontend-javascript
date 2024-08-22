export default class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name !== 'string' ||
      typeof length !== 'number' ||
      !Array.isArray(students)
    ) {
      throw new Error('Invalid type');
    }
    this._name = name;
    this._length = lenght;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }
}
