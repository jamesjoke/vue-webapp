const proxyConfig = {
  // 外网服务地址
  INTERNET: {
    'dev_url': '/api',
    'test_url': 'http://119.3.219.0:8017/'
  }
}

const server = proxyConfig['INTERNET']

export default {
  baseUrl: 'http://39.96.102.135:8017/', // 生产环境api
  preBaseUrl: 'http://39.102.31.24:8017/', // 预生产环境api
  stagebaseUrl: server.test_url, // 测试环境api
  devbaseUrl: server.dev_url // 开发环境api
}
