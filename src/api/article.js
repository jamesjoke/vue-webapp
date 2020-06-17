/**
 * article模块接口列表
 */

import base from './base' // 导入接口域名列表
import axios from '@/http/index' // 导入http中创建的axios实例

const article = {
  // 新闻列表
  articleList(params) {
    return axios.get(`${base.dev}/toutiao/index`, { params: params })
  },
  // 新闻详情,演示
  articleDetail(id, params) {
    return axios.get(`${base.dev}/topic/${id}`, {
      params: params
    })
  }
  // 其他接口…………
}

export default article
