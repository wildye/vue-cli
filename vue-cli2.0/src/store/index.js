import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 子模块定义
let demo = {
  state: {
    count: 1
  }
}

export default new Vuex.Store({

  // 状态对象
  state: {
    count: 0
  },

  // 改变状态(同步): 唯一修改状态的事件回调函数
  mutations: {
    // 可传入参数
    setCount (state, val) {
      state.count = val
    }
  },

  // 状态计算: 在组件内部获取 store 中的状态的函数
  getters: {
    countMax (state) {
      return state.count > 10 ? 10 : state.count
    }
  },

  // 异步操作: 提交 mutation 改变状态
  actions: {
    toggleCount (state) {
      state.count += 'num: '
    }
  },
  // 划分模块: 将 store 分割成不同的模块, 对应不同组件
  modules: {
    demo
  }
})
