export default class Day {
  constructor(arg1, arg2, arg3) {
    if (typeof arg1 === 'object' && isDateObject(arg1)) {
      this._d = arg1;
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'number') {
      this._d = new Date(arg1, arg2 - 1, arg3);
    } else if (arg1 === 'dummy') {
      this._d = new Object();
    } else {
      this._d = new Date();
    }
  }

  get dayOfWeek() {
    if (typeof this._d.getDay !== 'function') return 0;
    return this._d.getDay();
  }
  get day() {
    if (typeof this._d.getDate !== 'function') return 0;
    return this._d.getDate();
  }
  get month() {
    if (typeof this._d.getMonth !== 'function') return 0;
    return this._d.getMonth() + 1;
  }
  get year() {
    if (typeof this._d.getFullYear !== 'function') return 0;
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
  formatDate(format) {
    if (!isDateObject(this._d)) return '';

    format = format.replace(/yyyy/g, this.year);
    format = format.replace(/MM/g, `0${this.month}`.slice(-2));
    format = format.replace(/dd/g, `0${this.day}`.slice(-2));
    return format;
  }
  isSaturday() {
    return this.dayOfWeek === 6;
  }
  isSunday() {
    return this.dayOfWeek === 0;
  }
  isSameDate(target) {
    if (isDayObject(target)) {
      return this.day === target.day && this.month === target.month && this.year === target.year;
    }
    if (isDateObject(target)) {
      return (
        this.day === target.getDate() &&
        this.month === target.getMonth() + 1 &&
        this.year === target.getFullYear()
      );
    }
    return false;
  }
  isToday() {
    return this.isSameDate(new Date());
  }
}

function isDateObject(arg) {
  return (
    typeof arg.getDay === 'function' &&
    typeof arg.getDate === 'function' &&
    typeof arg.getMonth === 'function' &&
    typeof arg.getFullYear === 'function'
  );
}

function isDayObject(arg) {
  return typeof arg.day === 'number' && typeof arg.month === 'number' && typeof arg.year === 'number';
}
