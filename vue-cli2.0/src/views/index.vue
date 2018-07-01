<template>
  <div>
    <h1>index page</h1>
    <apiTest/>
  </div>
</template>

<script>
import apiTest from '../components/axiosDemo'
export default {
  name: 'index',
  components: {
    apiTest
  }
}
</script>

<style lang="less">
@import "../style/less/_index";
div {
  color:@base-color
}
</style>
