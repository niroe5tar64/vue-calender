import MyDate from './MyDate.js';

export default class Week {
  /**
   * Weekクラスのコンストラクタ
   * 想定される引数は下記の4パターン
   * @param {number} year    ... 年
   * @param {number} month   ... 月
   * @param {number} ordinal ... n週目
   */
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

  /**
   * この週に属する日付のMyDateオブジェクトを要素数7の配列として取得する。
   * @return {Array<MyDate>}
   */
  get days() {
    return this._w;
  }
  /**
   * 年を取得する。
   * @return {number}
   */
  get year() {
    return this._y;
  }
  /**
   * 月を取得する。
   * @return {number}
   */
  get month() {
    return this._m;
  }
  /**
   * この週は何周目かを取得する。
   * @return {number}
   */
  get ordinal() {
    return this._o;
  }
  /**
   * 月の最終週か否かを判定する。
   * @return {boolean}
   */
  isEndOfMonth() {
    const d = this._w[0];
    return this._m !== new MyDate(d.year, d.month, d.day + 7).month;
  }
}

/**
 * 要素数nの配列を取得する。
 * 取得した配列内の各要素は'undefined'である。
 * @param {number} n
 * @returns {Array} 要素数nの配列
 */
function times(n) {
  return [...Array(n)];
}
