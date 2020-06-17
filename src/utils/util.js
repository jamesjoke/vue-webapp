const utils = {
  /**
   * 校验时间
   * @param s
   * @returns {string}
   */
  getNow(s) {
    return s < 10 ? '0' + s : s
  },

  /**
   * 获取当前时间
   * @returns {string}
   */

  getDate() {
    const myDate = new Date()
    const year = myDate.getFullYear()
    const month = myDate.getMonth() + 1
    const date = myDate.getDate()
    const h = myDate.getHours()
    const m = myDate.getMinutes()
    const s = myDate.getSeconds()
    return (
      year +
      '-' +
      this.getNow(month) +
      '-' +
      this.getNow(date) +
      ' ' +
      this.getNow(h) +
      ':' +
      this.getNow(m) +
      ':' +
      this.getNow(s)
    )
  }
}
export default utils
