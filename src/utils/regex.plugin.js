const RegexPlugin = {}

RegexPlugin.install = function(Vue) {
  Vue.prototype.$regex = {
    // 中文姓名
    nameReg: /^([\u4e00-\u9fa5·]{2,18})$/,
    // 车牌号
    carNum: /(^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4}))$)|(^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1}$)/,
    // 道路运输证
    transportCardNo: /^[0-9]{9,13}$/,
    // 社会信用
    credence: /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g,
    // 身份证号
    Identity: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
    // 银行卡号
    bankCard: /([\d]{4})([\d]{4})([\d]{4})([\d]{4})([\d]{0,})?/,
    // 手机号
    phone: /^1[3456789]\d{9}$/,
    // 从业资格证只能输入字母与数字
    qualification: /^\w+$/,
  }
}

export default RegexPlugin
