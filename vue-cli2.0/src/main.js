import Vue from 'vue'
import App from './App'

// 引入组件
import router from './router'
import store from './store'
import api from './api'

// 绑定全局方法
Vue.prototype.$api = api

// 是否在启动时生成提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  api,
  render: h => h(App)
}).$mount('#app')
