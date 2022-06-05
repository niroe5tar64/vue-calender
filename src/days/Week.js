import MyDate from './MyDate.js';

export default class Week {
  constructor(year, month, ordinal) {
    const fd = new MyDate(year, month, 1).firstOfWeek();
    const d = new MyDate(fd.year, fd.month, fd.day + 7 * (ordinal - 1));
    if (ordinal < 1 || (ordinal > 1 && d.month !== month)) {
      throw new Error(`引数の値が不正です。: ordinal = ${ordinal}`);
    }
    this._w = times(7).map((_, i) => new MyDate(d.year, d.month, d.day + i));
    this._y = year;
    this._m = month;
    this._o = ordinal;
  }

  get days() {
    return this._w;
  }
  get year() {
    return this._y;
  }
  get month() {
    return this._m;
  }
  get ordinal() {
    return this._o;
  }
  isEndOfMonth() {
    const d = this._w[0];
    return this._m !== new MyDate(d.year, d.month, d.day + 7).month;
  }
}

/**
 * 要素数nの配列を返す。また配列内の各要素は'undefined'である。
 * @param {number} n
 * @returns {Array} 要素数nの配列
 */
function times(n) {
  return [...Array(n)];
}
