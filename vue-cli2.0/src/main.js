import Vue from 'vue'
import App from './App'
import router from './router'

// 引入组件
import api from './api'

// 绑定全局方法
Vue.prototype.$api = api

// 是否在启动时生成提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  api,
  render: h => h(App)
}).$mount('#app')
