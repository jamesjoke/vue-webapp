/**
 * 接口域名的管理 多个服务情况下
 */
import config from '../config/config.js'
var baseUrl = ''

if (process.env.VUE_APP_CURRENTMODE === 'production') {
  baseUrl = config.baseUrl
} else if (process.env.VUE_APP_CURRENTMODE === 'pre') {
  baseUrl = config.preBaseUrl
} else if (process.env.VUE_APP_CURRENTMODE === 'stage') {
  baseUrl = config.stagebaseUrl
} else {
  baseUrl = config.devbaseUrl
}

const base = {
  dev: baseUrl,
  test: 'http://xxxxx22222.com/api'
}

export default base
