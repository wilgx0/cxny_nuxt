<template>
  <div
    class="swiper swiperBox"
    v-swiper:swiper="swiperOption"
    ref="swiperBox"
    @mouseenter="stopSwiper"
    @mouseleave="startSwiper"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(v,i) in data" :key="i">
        <img :src="v.img">
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 500,
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        slidesPerView: "auto",
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChange() {
            // console.log('onSlideChangeEnd', this);
          },
          tap() {
            // console.log('onTap', this);
          }
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        autoplayDisableOnInteraction: false,
        // effect:'cube',
        mousewheel: true,
        preloadImages: false,
        lazy: true
      }
    };
  },
  props:['data'],
  swiper() {
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    return this.$refs.swiperBox.swiper;
  },
  methods: {
    stopSwiper() {
      this.swiper.autoplay.stop();
    },
    startSwiper() {
      this.swiper.autoplay.start();
    }
  }
};
</script>
<style lang="less" scoped>
.swiperBox {
  width: 100%;
  height: 390px;
  .swiper-wrapper {
    .swiper-slide {
      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

