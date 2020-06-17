import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import api from './api' // 导入api接口
import utils from './utils/util' // 导入api接口
import RegexPlugin from './utils/regex.plugin' // 导入api接口

import 'vant/lib/index.css'
import 'amfe-flexible'
import fastclick from 'fastclick'

Vue.prototype.$api = api // 将api挂载到vue的原型上
Vue.prototype.$utils = utils
fastclick.attach(document.body)
Vue.use(RegexPlugin)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,

  store,
  /* eslint-disable */
  render: (h) => h(App),
}).$mount("#app");
