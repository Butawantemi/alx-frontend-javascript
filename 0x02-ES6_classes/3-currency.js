export default class Currency {
  // Constructor
  constructor(code, name) {
    if (typeof code !== "string" || typeof name !== "string") {
      throw new Error("Code and name must be strings");
    }

    this._code = code;
    this._name = name;
  }

  // Getters and Setters for code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== "string") {
      throw new Error("Code must be a string");
    }
    this._code = value;
  }
  // Getters and Setters for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string") {
      throw new Error("Name must be a string");
    }
  }

  displayFullCurrency(){
    return `${this._name} (${this._code})`;
  }
}
