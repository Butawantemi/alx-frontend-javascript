export default class Building {
  constructor(sqft) {
    if (typeof sqft !== "number") {
      throw new Error("Sqft must be a number");
    }
    this._sqft = sqft;
  }
}
