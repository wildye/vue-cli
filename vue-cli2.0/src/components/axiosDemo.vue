<template>
  <div>
    <h1>axiosDemo</h1>
    <ul v-for="val in figure" :key="val.id">
      <li>中文名: {{val.cnname}}</li>
      <li>外文名: {{val.name}}</li>
      <li>出生地: {{val.birthplace}}</li>
      <li>能力:<span v-for="o in val.ability" :key="o.id">{{o}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'axiosDemo',
  data () {
    return {
      figure: null
    }
  },
  created () {
    this.getAPI()
  },
  methods: {
    // 封装 API 调用示例
    getAPI () {
      this.$api.get('mock', null, result => {
        this.figure = result.data.data
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
