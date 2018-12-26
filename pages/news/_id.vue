<template>
  <div>
   
    <div class="container">
      <nav-header :data="$store.state.navData" :activeIndex="'/news/' + $route.params.id"></nav-header>
      <!-- 幻灯片 -->
      <slide :data="$store.state.slideData"></slide>
      <!-- <p>ID:{{ $route.params.id}}</p> -->
      <article v-html="(news[0] && news[0].content)? news[0].content : ''"></article>
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
 
    let news = await Vue.http.get(url.getNews,{
      params:{
        cid:params.id
      }
    });
    news = news.list
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