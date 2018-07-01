<template>
  <div>axiosDemo</div>
</template>

<script>
export default {
  name: 'axiosDemo',
  methods: {
    // 封装 API 调用示例
    getAPI () {
      this.$api.get('list', null, result => {
        console.log(result)
      })
    },
    postAPI () {
      let p = {name: 'hannah', age: 18}
      this.$api.post('list', p, result => {
        console.log(result.data)
        console.log(result.headers.authorization)
      }, err => {
        console.log(err.status)
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
