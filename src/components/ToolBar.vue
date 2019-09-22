<template>
  <div class="tool-bar">
    <div class="tool-bar-item" @click="onChangeFragment(item, index)" v-for="(item, index) in toolBarData" :key="index">
      <img class="tool-bar-item-img" :src="[index === selectItemIndex ? item.hIcon : item.nIcon]" />
      <p class="tool-bar-item-name" :class="{'tool-bar-item-name-h': index === selectItemIndex}">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        // tab 按钮数据源
        toolBarData: [{
            // 默认图片
            nIcon: require('@img/home-n.svg'),
            // 高亮图片
            hIcon: require('@img/home-h.svg'),
            // 名称
            name: '首页',
            // 跳转的组件名称
            componentName: 'home'
          },
          {
            // 默认图片
            nIcon: require('@img/shopping-n.svg'),
            // 高亮图片
            hIcon: require('@img/shopping-h.svg'),
            // 名称
            name: '购物车',
            // 跳转的组件名称
            componentName: 'shopping'
          },
          {
            // 默认图片
            nIcon: require('@img/my-n.svg'),
            // 高亮图片
            hIcon: require('@img/my-h.svg'),
            // 名称
            name: '我的',
            // 跳转的组件名称
            componentName: 'my'
          }
        ],
        //  选中的tab index
        selectItemIndex: 0
      }
    },
    methods: {
      onChangeFragment: function (item, index) {
        this.selectItemIndex = index
        this.$emit('onChangeFragment', item.componentName)
      }
    }
  }
</script>

<style lang="scss">
  @import '@css/style.scss';
  .tool-bar {
    width: 100%;
    height: px2rem(46);
    display: flex;
    justify-content: space-around;
    background-color: white;
    box-shadow: 0 0 px2rem(16) 0 rgba(0, 0, 0, 0.2);
    border-top: 1px solid $lineColor;

    &-item {
      text-align: center;
      padding: px2rem(4) px2rem(12);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-img {
        width: px2rem(22);
        height: px2rem(22);
      }

      &-name {
        font-size: px2rem(14);
        margin-top: px2rem(4);
        &-h {
          color: $mainColor;
        }
      }

    }
  }
</style>
