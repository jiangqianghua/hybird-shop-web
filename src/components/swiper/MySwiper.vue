<template>
    <swiper :options="swiperOptions">
      <swiper-slide class="swiper-slide" v-for="(item, index) in swiperImgs" :key="index"  >
        <img class="swiper-slide-img" :style="{height: height}" />
      </swiper-slide>
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
        autoPlay: true,
        // swiper 高度跟随slide高度变化
        autoHeight: true
      }
    }
  }
}
</script>

<style>
</style>
