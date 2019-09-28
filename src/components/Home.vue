<template>
  <div class="home">
    <div class="home-content">
      <my-swiper :swiperImgs="swiperImgs.map(item => item.icon)" :height="swiperHeight"></my-swiper>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MySwiper from '@c/swiper/MySwiper.vue'
// var Fly = require('flyio/dist/npm/fly')
export default {
  name: 'home',
  components: {
    MySwiper
  },
  data: function () {
    return {
      swiperImgs: [
        // require('@img/swiper-1.jpg'),
        // require('@img/swiper-2.jpg'),
        // require('@img/swiper-3.jpg'),
        // require('@img/swiper-4.jpg'),
        // require('@img/swiper-5.jpg'),
        // require('@img/swiper-6.jpg'),
        // require('@img/swiper-7.jpg'),
        // require('@img/swiper-8.jpg')
      ],
      swiperHeight: '184px'
    }
  },
  created: function () {
    this.initData()
  },
  methods: {
    initData: function () {
      this.$http.get('/swiper.json')
        .then(data => {
          console.log(data)
          this.swiperImgs = data
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted: function () {
    // var adapter = require('flyio/dist/npm/adapter/dsbridge')
    // var EngineWrapper = require('flyio/dist/npm/engine-wrapper')
    // var Fly = require('flyio/dist/npm/fly')

    // var dsEngine = EngineWrapper(adapter)
    // var fly = new Fly(dsEngine)

    // fly.get('http://www.baidu.com')
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
  .home{
    width: 100%;
    height: 100%;
    font-size: px2rem(32);
    &-content{
      height: 100%;
    }
  }
</style>
