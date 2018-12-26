<template>
  <div>
    <div class="container">
      <!--导航666-->
      <nav-header :data="$store.state.navData" activeIndex="/"></nav-header>
      <!-- 幻灯片 -->
      <slide :data="$store.state.slideData"></slide>

      <!-- 健康生活 -->
      <div class="healthy-life">
        <h1>HEALTHY LIFE/健康生活倡导者</h1>
        <ul>
          <li v-for='(v,i) in healthyLifeData' :key='i'>
            <a href="">
              <img :src="v.img" alt=''>
            </a>
          </li>
        </ul>
      </div>

      <!-- 产品展示 -->
      <div class="product-show">
        <h1>EXHIBITION/产品展示</h1>
        <ul>
          <li v-for='(v,i) in productData' :key='i'>
              <nuxt-link :to="'/list/'+v.cid+'/'+v.id"><img :src="v.img" alt=''></nuxt-link>
          </li>
        </ul>
      </div>
      
      <!-- 农场 -->
      <img-list :list="farm"></img-list>

    </div>
    <!-- 页脚 -->
    <foot></foot>
  </div>
</template>

<script>
import Vue from "vue";
import NavHeader from "~/components/NavHeader/NavHeader.vue";
import Slide from "~/components/Slide.vue";
import Foot from "~/components/Foot.vue";
import ImgList from "~/components/ImgList.vue"
import {url} from "~/config"

export default {
  data() {
    return {};
  },

  methods: {},
  async asyncData() {
    let [healthyLifeData, productData,farm] = await Promise.all([
      Vue.http.get(url.getSlide, {    //健康生活
        params: {
          typeid: 2
        }
      }),
      Vue.http.get(url.getNews, {     //产品展示
        params: {
          cid: 2,
          limit: 15
        }
      }),
      Vue.http.get(url.getNav, {     //农场
        params: {
          id: 5
        }
      }),
    ]);
    productData = productData.list 
    return {
      healthyLifeData,
      productData,
      farm
    };
  },
  async fetch({ store, params }) {
    if (process.server) {
      await store.dispatch("getNav");
      await store.dispatch("getSlide");
    }
  },
  head() {      //设置关键字
		// return {
		// 	title:'成雄农业',
		// 	meta:[
		// 		{hid:'description',name:'description',content:'成雄农业'},
		// 		{hid:'keywords',name:'keywords',content:'成雄农业'},
		// 		{hid:'author',content:'k'}
		// 	]
		// }
	},
  components: {
    NavHeader,
    Slide,
    Foot,
    ImgList
  },
  created: function() {}
};
</script>

<style  lang="less" scoped>
.container {
  .healthy-life {
    display: flex;
    flex-direction: column;
    & > h1 {
      font-size: 14px;
      color: #2f6b11;
    }
    & > ul {
      height:127px;
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      li {
        img {
          height:100%;
          width: 100%;
        }
      }
    }
  }
  .product-show{
    & > h1 {
      font-size: 14px;
    }

    & > ul {
      list-style-type: none;
      padding:0;
      display:flex;
      flex-wrap:wrap;
      justify-content: space-between;
      li{
        height:144px;
        width:229px;
        margin-bottom:3px;
        img{
          height:100%;
          width: 100%;
        }
      }
    }
  }
}
</style>

