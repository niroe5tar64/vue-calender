import MyDate from './MyDate.js';
import Week from './Week.js';

export default class CalendarMonth {
  constructor(year, month) {
    if (year === undefined && month === undefined) {
      const d = new MyDate();
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
      weeks.push(new Week(this.year, this.month, weeks.length + 1));
    } while (!weeks.slice(-1)[0].isEndOfMonth());
    return weeks;
  }

  prev() {
    const d = new MyDate(this.year, this.month - 1, 1);
    this._y = d.year;
    this._m = d.month;
  }

  next() {
    const d = new MyDate(this.year, this.month + 1, 1);
    this._y = d.year;
    this._m = d.month;
  }
}
