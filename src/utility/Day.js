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

  get day() {
    return this._d.getDay();
  }
  get date() {
    return this._d.getDate();
  }
  get month() {
    return this._d.getMonth() + 1;
  }
  get year() {
    return this._d.getFullYear();
  }
  firstOfWeek() {
    return new Day(this._d.getFullYear(), this._d.getMonth() + 1, this._d.getDate() - this._d.getDay());
  }
  endOfWeek() {
    return new Day(
      this._d.getFullYear(),
      this._d.getMonth() + 1,
      this._d.getDate() + 6 - this._d.getDay()
    );
  }
  firstOfMonth() {
    return new Day(this._d.getFullYear(), this._d.getMonth() + 1, 1);
  }
  endOfMonth() {
    return new Day(this._d.getFullYear(), this._d.getMonth() + 2, 0);
  }
}
