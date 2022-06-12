export default class MyDate {
  /**
   * MyDateクラスのコンストラクタ
   * 想定される引数は下記の4パターン
   *
   * パターン1: Dateオブジェクトを指定する。
   * @param {Date} arg1
   *
   * パターン2: 年月日をそのまま指定する。
   * @param {number} arg1 年
   * @param {number} arg2 月
   * @param {number} arg3 日
   *
   * パターン3: ダミーオブジェクトを設定する。
   * @param {string} arg1 'dummy'
   *
   * パターン4: それ以外は今日の日付を設定する。
   */
  constructor(arg1, arg2, arg3) {
    if (isDateObject(arg1)) {
      this._d = arg1;
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'number') {
      this._d = new Date(arg1, arg2 - 1, arg3);
    } else if (arg1 === 'dummy') {
      this._d = new Object();
    } else {
      this._d = new Date();
    }
  }

  /**
   * 年を取得する。
   * @return {number}
   */
  get year() {
    if (typeof this._d.getFullYear !== 'function') return 0;
    return this._d.getFullYear();
  }
  /**
   * 月を取得する。
   * @return {number}
   */
  get month() {
    if (typeof this._d.getMonth !== 'function') return 0;
    return this._d.getMonth() + 1;
  }
  /**
   * 日を取得する。
   * @return {number}
   */
  get day() {
    if (typeof this._d.getDate !== 'function') return 0;
    return this._d.getDate();
  }
  /**
   * 曜日を取得する。
   * ex) 0: sunday, 1: monday, 2: tuesday ... 6: saturday
   * @return {number}
   */
  get dayOfWeek() {
    if (typeof this._d.getDay !== 'function') return 0;
    return this._d.getDay();
  }
  /**
   * このインスタンスが属する週の初日の日付オブジェクトを取得する。
   * @param {void}
   * @return {number}
   */
  firstOfWeek() {
    return new MyDate(this.year, this.month, this.day - this.dayOfWeek);
  }
  /**
   * このインスタンスが属する週の最終日の日付オブジェクトを取得する。
   * @param {void}
   * @return {number}
   */
  endOfWeek() {
    return new MyDate(this.year, this.month, this.day + 6 - this.dayOfWeek);
  }
  /**
   * このインスタンスが属する月の初日の日付オブジェクトを取得する。
   * @param {void}
   * @return {number}
   */
  firstOfMonth() {
    return new MyDate(this.year, this.month, 1);
  }
  /**
   * このインスタンスが属する月の最終日の日付オブジェクトを取得する。
   * @param {void}
   * @return {number}
   */
  endOfMonth() {
    return new MyDate(this.year, this.month + 1, 0);
  }
  /**
   * 引数に指定したフォーマット形式で日付文字列を取得する。
   * ex) new MyDate(2022, 1, 5).formatDate('yyyy年MM月dd日') => 2022年01月05日
   *     new MyDate(2022, 1, 5).formatDate('M/d')           => 1/5
   * @param {string} format
   * @return {string}
   */
  formatDate(format) {
    if (!isDateObject(this._d)) return '';

    format = format.replace(/yyyy/g, this.year);
    format = format.replace(/MM/g, `0${this.month}`.slice(-2));
    format = format.replace(/M/g, `${this.month}`.slice(-2));
    format = format.replace(/dd/g, `0${this.day}`.slice(-2));
    format = format.replace(/d/g, `${this.day}`.slice(-2));
    return format;
  }
  /**
   * このインスタンスが土曜日か否かを判定する。
   * @param {void}
   * @return {boolean}
   */
  isSaturday() {
    return this.dayOfWeek === 6;
  }
  /**
   * このインスタンスが日曜日か否かを判定する。
   * @param {void}
   * @return {boolean}
   */
  isSunday() {
    return this.dayOfWeek === 0;
  }
  /**
   * 引数に指定したオブジェクトと同じ日付か否かを判定する。
   * @param {MyDate, Date} target
   * @return {boolean}
   */
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
  /**
   * このインスタンスが本日か否かを判定する。
   * @param {void}
   * @return {boolean}
   */
  isToday() {
    return this.isSameDate(new Date());
  }
  /**
   * 引数に指定した期間分、前の日付を取得する。
   * @param {number} num
   * @param {string} term
   * @returns {MyDate}
   */
  ago(num, term) {
    const terms = ['years', 'months', 'days'];
    if (typeof num !== 'number' || !terms.includes(term)) {
      throw new Error(`引数の値が不正です。: num = ${num}, term = ${term}`);
    }

    if (term === 'years') {
      return new MyDate(this.year - num, this.month, this.day);
    }
    if (term === 'months') {
      const date = new MyDate(this.year, this.month - num, this.day);
      const fd = new MyDate(this.year, this.month - num, 1);
      if (date.month !== fd.month) return fd.endOfMonth();
      return date;
    }
    if (term === 'days') {
      return new MyDate(this.year, this.month, this.day - num);
    }
  }

  /**
   * 引数に指定した期間分、後の日付を取得する。
   * @param {number} num
   * @param {string} term
   * @returns {MyDate}
   */
  since(num, term) {
    const terms = ['years', 'months', 'days'];
    if (typeof num !== 'number' || !terms.includes(term)) {
      throw new Error(`引数の値が不正です。: num = ${num}, term = ${term}`);
    }

    if (term === 'years') {
      return new MyDate(this.year + num, this.month, this.day);
    }
    if (term === 'months') {
      const date = new MyDate(this.year, this.month + num, this.day);
      const fd = new MyDate(this.year, this.month + num, 1);
      if (date.month !== fd.month) return fd.endOfMonth();
      return date;
    }
    if (term === 'days') {
      return new MyDate(this.year, this.month, this.day + num);
    }
  }
}

function isDateObject(arg) {
  return (
    typeof arg === 'object' &&
    typeof arg.getDay === 'function' &&
    typeof arg.getDate === 'function' &&
    typeof arg.getMonth === 'function' &&
    typeof arg.getFullYear === 'function'
  );
}

function isDayObject(arg) {
  return (
    typeof arg === 'object' &&
    typeof arg.day === 'number' &&
    typeof arg.month === 'number' &&
    typeof arg.year === 'number'
  );
}
