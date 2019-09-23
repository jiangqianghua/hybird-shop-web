<template>
  <div class="main">
    <component :is="currentComponent"></component>
    <tool-bar @onChangeFragment="onChangeFragment"></tool-bar>
  </div>
</template>

<script>
import toolBar from '@c/currency/ToolBar.vue'
export default {
  data: function () {
    return {
      currentComponent: 'home'
    }
  },
  components: {
    'tool-bar': toolBar,
    // 异步组件引入, 只有在需要展示的时候，才会渲染
    'home': () => import('@c/Home'),
    'shopping': () => import('@c/Shopping'),
    'my': () => import('@c/My')
  },
  methods: {
    onChangeFragment: function (componentName) {
      console.log(componentName)
      this.currentComponent = componentName
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
