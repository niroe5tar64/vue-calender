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
    const d = new MyDate(year, month, 7 * (ordinal - 1) + 1).firstOfWeek();
    if (ordinal < 1 || (ordinal > 1 && d.month !== month)) {
      throw new Error(`引数の値が不正です。: ordinal = ${ordinal}`);
    }
    this._y = year;
    this._m = month;
    this._o = ordinal;
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
   * この週に属する日付のMyDateオブジェクトを要素数7の配列として取得する。
   * @return {Array<MyDate>}
   */
  get days() {
    const d = new MyDate(this.year, this.month, 7 * (this.ordinal - 1) + 1).firstOfWeek();
    return times(7).map((_, i) => new MyDate(d.year, d.month, d.day + i));
  }
  /**
   * 月の最終週か否かを判定する。
   * @return {boolean}
   */
  isEndOfMonth() {
    const d = new MyDate(this.year, this.month, 7 * (this.ordinal - 1) + 1).firstOfWeek();
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
