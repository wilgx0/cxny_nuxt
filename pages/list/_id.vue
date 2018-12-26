<template>
  <div>
    <!-- 列表页 -->
    <div class="container">
      <nav-header :data="$store.state.navData" :activeIndex="'/list/' + $route.params.id"></nav-header> 
      <!-- 幻灯片 -->
      <slide :data="$store.state.slideData"></slide>
      <!-- <p>ID:{{ $route.params.id}}</p> -->
      <!-- 搜索 -->
      <search class='outsearch' @action-search="actionSearch"></search>
      <!-- 数据列表 -->
      <img-listt 
        :list="list" 
        :size="pageSize" 
        :total="total"
        :cid="$route.params.id"
        @page-change="pageChange" 
        @show-article="showArticle"
      >
      </img-listt> 

    </div>
    <!-- 页脚 -->
    <foot></foot>
  </div>

</template>

<script>

import Vue from "vue"
import NavHeader from "~/components/NavHeader/NavHeader.vue"
import Slide from "~/components/Slide.vue";
import Foot from "~/components/Foot.vue";
import {url} from "~/config"
import ImgListt from "~/components/ImgList_1.vue"
import Search from "~/components/Search.vue"

/**
 * 获取分页数据
 */
async function  paginationData(id,page = 1,pageSize = 4,key = ""){
    let data = await Vue.http.get(url.getNews,{
      params:{
        cid:id,    
        page:page,
        limit:pageSize,
        key:key
      }
    });
    return [
      pageSize,
      page,
      data
    ]
}

export default {
  data() {
    return {

    };
  },
  methods:{
    actionSearch(val){      //搜索
      let id = this.$route.params.id
      this.$router.push(`/list/${id}?search_key=${val}`);
    },
    async pageChange(p){    //获取分页数据
      let search_key = this.$route.query.search_key
      let  [pageSize,page,data] = await paginationData(this.$route.params.id,p,4,search_key);
      this.list = data.list;
      this.total = data.total;
      this.pageSize = pageSize;
    },
    showArticle(nid){       //显示文章数据
      let id = this.$route.params.id
      this.$router.push(`/list/${id}/${nid}`);
    }
  },
  watch:{
    '$route'(to,from){
      let that = this;
      (async function (){
        let id =  that.$route.params.id
        let search_key = that.$route.query.search_key
        let  [pageSize,page,data] = await paginationData(id,1,4,search_key)
        that.list = data.list
        that.total = data.total
        that.pageSize = pageSize
      })();
      
    }
  },
  async asyncData({params,query}) {
      let  [pageSize,page,data] = await paginationData(params.id,1,4,query.search_key)
      return {
        list:data.list,
        total:data.total,
        pageSize:pageSize,
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
    ImgListt,
    Search
  },
};
</script>

<style lang="less">
  .container{
    .outsearch{
      padding:10px 0;
    }
  }

</style>


