import Currency from './3-currency.js';

export default class pricing {
  constructor(amount, currency) {
    if (typeof amount !== "number" || !(currency instanceof Currency)) {
      throw new Error("Invalid type");
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== "number") {
      throw new Error("Amount must be a number");
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error("Currency must be a Currency");
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amout, conversionRate) {
    if (typeof amout !== "number" || typeof conversionRate !== "number") {
      throw new Error("Amount and convertionRate must be numbers");
    }
    return amout * conversionRate;
  }
}
