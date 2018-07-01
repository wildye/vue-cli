<template>
  <div>
    <button @click="handle1(5)">触发状态改变</button>
    <button @click="handle2">触发异步状态改变</button>
  </div>
</template>

<script>
// 导入 vuex 辅助函数
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'vuexDemo',
  data () {
    return {
      sum: 0
    }
  },
  // 使用辅助函数获取状态值
  // computed:mapState({
  //   num: state => state.count
  //   num: 'count'
  //   num (state) { return state.count + 100 }
  // }),
  // computed:mapState(['count']),
  computed: {
    abc () {
      return 123
    },
    ...mapState(['count']),
    ...mapGetters(['countMax'])
  },
  methods: {
    // vuex 状态管理
    demo1 () {
      // 获取状态值
      this.sum = this.$store.state.count
      // 获取计算状态
      this.sum = this.$store.getters.countMax
      // 改变状态值
      this.$store.commit('setCount', true)
      // 改变状态值(异步)
      this.$store.dispatch('toggleCount')
    },
    // 调用子模块状态管理
    demo2 () {
      this.sum = this.$store.demo.count
    },
    // 通过事件触发状态改变
    ...mapMutations({
      handle1: 'setCount'
    }),
    // 通过事件触发异步状态改变
    ...mapActions({
      handle2: 'toggleCount'
    })
  }
}
</script>

<style lang="less">
@import "../style/less/_index";
div {
  color:@base-color
}
</style>
