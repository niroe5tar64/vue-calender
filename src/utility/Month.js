/* eslint-disable no-unused-vars */
import Day from './Day.js';
import Week from './Week.js';

export default class Month {
  // Dateオブジェクト
  constructor(year, month) {
    if (year === undefined && month === undefined) {
      const d = new Day();
      this._y = d.year;
      this._m = d.month;
    } else {
      this._y = year;
      this._m = month;
    }
  }

  get year() {
    return this._y;
  }

  get month() {
    return this._m;
  }

  get weeks() {
    const weeks = [];
    do {
      weeks.push(new Week(this._y, this._m, weeks.length + 1));
    } while (!weeks.slice(-1)[0].isEndOfMonth());
    return weeks;
  }

  prev() {
    const d = new Day(this._y, this._m - 1, 1);
    this._y = d.year;
    this._m = d.month;
  }

  next() {
    const d = new Day(this._y, this._m + 1, 1);
    this._y = d.year;
    this._m = d.month;
  }
}
