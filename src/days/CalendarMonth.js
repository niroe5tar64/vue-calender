import MyDate from './MyDate.js';
import Week from './Week.js';

export default class CalendarMonth {
  /**
   * CalendarMonthクラスのコンストラクタ
   * 引数に指定した年月が適正値ではない場合は今日の日付を元にインスタンス化する。
   * @param {number} arg1 ... 年
   * @param {number} arg2 ... 月
   */
  constructor(year, month) {
    if (typeof year === 'number' && typeof month === 'number' && 1 <= month && month <= 12) {
      this._y = year;
      this._m = month;
    } else {
      const d = new MyDate();
      this._y = d.year;
      this._m = d.month;
    }
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
   * この月に属する週をWeekオブジェクトの配列として取得する。
   * @return {Array<Week>}
   */
  get weeks() {
    const weeks = [];
    do {
      weeks.push(new Week(this.year, this.month, weeks.length + 1));
    } while (!weeks.slice(-1)[0].isEndOfMonth());
    return weeks;
  }
  /**
   * 前月を示すようにインスタンス変数(year, month)を設定する。
   * @param {void}
   * @return {void}
   */
  prev() {
    const d = new MyDate(this.year, this.month - 1, 1);
    this._y = d.year;
    this._m = d.month;
  }
  /**
   * 翌月を示すようにインスタンス変数(year, month)を設定する。
   * @param {void}
   * @return {void}
   */
  next() {
    const d = new MyDate(this.year, this.month + 1, 1);
    this._y = d.year;
    this._m = d.month;
  }
}
