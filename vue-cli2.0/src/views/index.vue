<template>
  <div>index page</div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    // 封装 API 调用示例
    getData () {
      this.$api.get('list', null, r => {
        console.log(r)
      })
    }
  }
}
</script>

<style lang="less">
@import "../style/less/_index";
div {
  color:@base-color
}
</style>
