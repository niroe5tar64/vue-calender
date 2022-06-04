export default class Day {
  constructor(arg1, arg2, arg3) {
    if (typeof arg1 === 'object') {
      this._date = arg1;
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'number') {
      this._date = new Date(arg1, arg2 - 1, arg3);
    } else {
      this._date = new Date();
    }
  }

  getDay() {
    return this._date.getDay();
  }
  getDate() {
    return this._date.getDate();
  }
  getMonth() {
    return this._date.getMonth() + 1;
  }
  getFullYear() {
    return this._date.getFullYear();
  }
}
