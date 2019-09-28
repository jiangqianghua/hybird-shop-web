<template>
    <swiper :options="swiperOptions">
      <swiper-slide class="swiper-slide" v-for="(item, index) in swiperImgs" :key="index"  >
        <img class="swiper-slide-img" :style="{height: height}" :src="item" />
      </swiper-slide>
      <template v-slot:pagination>
        <div class="swiper-pagination"></div>
      </template>
    </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    height: {
      type: String,
      auto: 'auto'
    },
    swiperImgs: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data: function () {
    return {
      swiperOptions: {
        autoplay: true,
        // swiper 高度跟随slide高度变化
        autoHeight: true,
        pagination: {
          //  设置分页器样式
          el: '.swiper-pagination',
          type: 'bullets',
          // 设置类名，方便修改样式
          bulletClass: 'custom-bullet-class'
        }
      }
    }
  }
}
</script>

<style lang="scss">
 @import '@css/style.scss';
  .swiper-pagination {
    bottom: px2rem(12);
    .custom-bullet-class {
      box-sizing: botder-box;
      border-radius: 100%;
      height: px2rem(6);
      width: px2rem(6);
      border: px2rem(1) solid #fff;
      margin: 0 px2rem(4);
      display: inline-block;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: white;
    }
  }
</style>
