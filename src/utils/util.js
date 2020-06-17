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
    let myDate = new Date()
    let year = myDate.getFullYear()
    let month = myDate.getMonth() + 1
    let date = myDate.getDate()
    let h = myDate.getHours()
    let m = myDate.getMinutes()
    let s = myDate.getSeconds()
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
