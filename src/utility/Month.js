export default class Month {
  // Dateオブジェクト
  constructor(year, month) {
    if (year === undefined && month === undefined) {
      const date = new Date();
      this._year = date.getFullYear();
      this._month = date.getMonth();
    } else {
      this._year = year;
      this._month = month - 1;
    }
  }

  get year() {
    return this._year;
  }

  get month() {
    return this._month + 1;
  }

  prev() {
    const date = new Date(this._year, this._month - 1, 1);
    this._year = date.getFullYear();
    this._month = date.getMonth();
  }

  next() {
    const date = new Date(this._year, this._month + 1, 1);
    this._year = date.getFullYear();
    this._month = date.getMonth();
  }

  monthArray() {
    const lastDate = lastDateOfMonth(this._year, this._month);
    const result = [];
    result.push(firstWeek(this._year, this._month));
    while (!isLastWeek(result.slice(-1)[0], lastDate)) {
      const biggingOfWeek = result.slice(-1)[0][6].getDate() + 1;
      result.push(nextWeek(this._year, this._month, biggingOfWeek));
    }
    return result;
  }
}

/**
 * TODO: 以下はprivateメソッドなので、新記法:'ex) #methodName()'で記述したいが
 *       ESLintがエラーを吐いてしまう。
 */

/**
 * 要素数nの配列を返す。また配列内の各要素は'undefined'である。
 * @param {number} n
 * @returns {Array} 要素数nの配列
 */
function times(n) {
  return [...Array(n)];
}

function biggingDateOfMonth(year, month) {
  return new Date(year, month, 1);
}

function lastDateOfMonth(year, month) {
  return new Date(year, month + 1, 0);
}

function isLastWeek(weekArray, lastDate) {
  // const weekArray = monthArray;
  return (
    // 週初めが月末日と同じ月
    weekArray[0].getMonth() === lastDate.getMonth() &&
    // 月末日を含む
    weekArray.some((d) => d.getDate() === lastDate.getDate())
  );
}

function firstWeek(year, month) {
  const firstDate = biggingDateOfMonth(year, month);
  console.log(new Date(year, month, 0));
  return times(7).map((_, i) => new Date(year, month, 1 + i - firstDate.getDay()));
}

function nextWeek(year, month, biggingOfWeek) {
  return times(7).map((_, i) => new Date(year, month, biggingOfWeek + i));
}
