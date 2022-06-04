export default class Day {
  constructor(arg1, arg2, arg3) {
    if (typeof arg1 === 'object') {
      this._d = arg1;
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'number') {
      this._d = new Date(arg1, arg2 - 1, arg3);
    } else {
      this._d = new Date();
    }
  }

  get dayOfWeek() {
    return this._d.getDay();
  }
  get day() {
    return this._d.getDate();
  }
  get month() {
    return this._d.getMonth() + 1;
  }
  get year() {
    return this._d.getFullYear();
  }
  firstOfWeek() {
    return new Day(this.year, this.month, this.day - this.dayOfWeek);
  }
  endOfWeek() {
    return new Day(this.year, this.month, this.day + 6 - this.dayOfWeek);
  }
  firstOfMonth() {
    return new Day(this.year, this.month + 1, 1);
  }
  endOfMonth() {
    return new Day(this.year, this.month + 2, 0);
  }
  isSaturday() {
    return this.dayOfWeek === 6;
  }
  isSunday() {
    return this.dayOfWeek === 0;
  }
}
