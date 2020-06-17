module.exports = {

  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://v.juhe.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
