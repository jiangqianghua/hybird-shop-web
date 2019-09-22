<template>
  <div class="home">
    <p class="test">测试 fontSize 样式</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
  .test {
    font-size: px2rem(16);
  }
</style>
