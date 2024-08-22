export default class Airport {
  constructor(name, code) {
    if (typeof name !== "string" || typeof code !== "string") {
      throw new Error("Code and name must be strings");
    }
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  toString() {
    return `[object ${this._name} - ${this._code}]`;
  }
}
