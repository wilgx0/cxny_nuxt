<template>
    <div>
        <div class="container">
            <nav-header :data="$store.state.navData" :activeIndex="'/list/' + $route.params.cid"></nav-header>
            <!-- 幻灯片 -->
            <slide :data="$store.state.slideData"></slide>
            <h3 class='title'>{{news.title}}</h3>
            <article v-html="news && news.content"></article>
        </div>
            <!-- 页脚 -->
        <foot></foot>
    </div>
</template>
<script>

import Vue from "vue"
import NavHeader from "~/components/NavHeader/NavHeader.vue"
import Slide from "~/components/Slide.vue"
import {url} from "~/config"
import Foot from "~/components/Foot.vue";

export default {
  data() {
    return {};
  },
  async asyncData({params}) {
 
    let news = await Vue.http.get(url.getArticle,{
      params:{
        id:params.nid
      }
    });
    return {
      news
    }     
  },
  async fetch({store,params}){ 
    if(process.server){
      await store.dispatch("getNav");
      await store.dispatch("getSlide");
    }
  },

  components: {
    NavHeader,
    Slide,
    Foot,
  },
};
</script>

 <style lang="less" >
    .container{
        .title{
            text-align:center;
        }
    }
</style>


    

